function curry(fn: Function) {
  const n = fn.length;
  const UNDEF = undefined;

  function curriedFn(...args: any[]) {
    const nonUndefinedArgs = args.filter((arg) => arg !== UNDEF);
    if (nonUndefinedArgs.length >= n) {
      return fn(...nonUndefinedArgs);
    } else {
      return function (...args2: any[]) {
        const combinedArgs = args.map((arg) =>
          arg === UNDEF ? args2.shift() : arg
        );
        // console.log(combinedArgs);
        return curriedFn(...combinedArgs, ...args2);
      };
    }
  }

  return curriedFn;
}

export default curry;
