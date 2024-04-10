type ThisWithMemoize<This> = This & { memoize: Map<string, any> };

function memoize<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const { kind } = context;

  if (kind !== "method") {
    throw new Error("Memoize can only be used with methods");
  }

  return function (this: ThisWithMemoize<This>, ...args: Args) {
    if (!this["memoize"]) {
      this["memoize"] = new Map();
    }

    const cacheKey = JSON.stringify(args);

    if (this["memoize"].has(cacheKey)) {
      console.log("Cache hit!");
      return this["memoize"].get(cacheKey);
    }

    const result = target.apply(this, args);
    this["memoize"].set(cacheKey, result);

    console.log(`Caching result for ${cacheKey}`);
    return result;
  };
}

class Example {
  @memoize
  expensiveOperation(arg: number) {
    console.log(`Processing very slowly...`);
    // Simulate an expensive operation
    return arg * 2; // Simplified example
  }
}

const example = new Example();
console.log(example.expensiveOperation(2)); // Logs the operation, returns 4
console.log(example.expensiveOperation(2)); // Returns 4 from cache, operation not logged
console.log(example.expensiveOperation(3)); // Logs the operation with new arg, returns 6
