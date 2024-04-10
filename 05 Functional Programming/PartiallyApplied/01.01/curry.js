const curry = (fn) => {
  const n = fn.length;

  return function curriedFn(...args) {
    if (args.length >= n) {
      return fn(...args);
    } else {
      // console.log(args);
      const nonUndefinedArgs = args.filter((arg) => arg !== undefined);
      // console.log(nonUndefinedArgs);
      const toBeFilled = args.length - nonUndefinedArgs.length;
      // console.log(toBeFilled);
      return function (...args2) {
        // console.log(args2);
        const goFirst = args2.slice(0, toBeFilled);
        // console.log(goFirst);
        const goSecond = args2.slice(toBeFilled);
        // console.log(goSecond);
        return curriedFn(...goFirst, ...nonUndefinedArgs, ...goSecond);
      };
    }
  };
};

export default curry;
