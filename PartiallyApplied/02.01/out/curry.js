function curry(fn) {
    const n = fn.length;
    const UNDEF = undefined;
    return function curriedFn(...args) {
        const nonUndefinedArgs = args.filter((arg) => arg !== UNDEF);
        if (nonUndefinedArgs.length >= n) {
            return fn(...args);
        }
        else {
            return function (...args2) {
                const combinedArgs = args.map((arg) => arg === UNDEF ? args2.shift() : arg);
                // console.log(combinedArgs);
                return curriedFn(...combinedArgs, ...args2);
            };
        }
    };
}
export default curry;
