function log<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const methodName = String(context.name);

  function replacementMethod(this: This, ...args: Args): Return {
    const result = target.call(this, ...args);
    console.log(`${methodName}(${args}) => ${result}`);
    return result;
  }

  return replacementMethod;
}

class Calculator {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
