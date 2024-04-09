function curry<T, U>(fn: (...args: T[]) => U) {
  const n = fn.length;
  const UNDEF = undefined;

  const curriedFn = (...args: (T | typeof UNDEF)[]) => {
    const nonUndefinedArgs = args.filter((arg) => arg !== UNDEF);
    if (nonUndefinedArgs.length >= n) {
      return fn(...nonUndefinedArgs);
    } else {
      return function (...args2: (T | typeof UNDEF)[]) {
        const combinedArgs = args.map((arg) =>
          arg === UNDEF ? args2.shift() : arg
        );
        // console.log(combinedArgs);
        return curriedFn(...combinedArgs, ...args2);
      };
    }
  };

  return curriedFn;
}

export default curry;
