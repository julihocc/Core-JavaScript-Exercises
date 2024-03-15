const curry = (fn) => {
  const n = fn.length;

  return function curriedFn(...args) {
    // FIXME: use named function instead of lambdas
    // FIXME: use symbol instead of undefined
    const nonUndefinedArgs = args.filter((arg) => arg !== undefined);
    if (nonUndefinedArgs.length >= n) {
      return fn(...args);
    } else {
      return function (...args2) {
        // TODO: Make this more functional replacing .shift() with a pure function
        const combinedArgs = args.map((arg) =>
          arg === undefined ? args2.shift() : arg
        );
        // console.log(combinedArgs);
        return curriedFn(...combinedArgs, ...args2);
      };
    }
  };
};

export default curry;
