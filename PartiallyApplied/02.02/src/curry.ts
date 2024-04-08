function curry<F extends (...args: any[]) => any>(fn: F) {
  const n = fn.length;
  const UNDEF = undefined;
  return function curriedFn(...args: any[]) {
    const nonUndefinedArgs = args.filter((arg) => arg !== UNDEF);
    if (nonUndefinedArgs.length >= n) {
      return fn(...args);
    } else {
      return function (...args2: any[]) {
        const combinedArgs = args.map((arg) =>
          arg === UNDEF ? args2.shift() : arg
        );
        // console.log(combinedArgs);
        return curriedFn(...combinedArgs, ...args2);
      };
    }
  };
}

export default curry;
