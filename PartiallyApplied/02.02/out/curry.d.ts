declare function curry<T, U>(fn: (...args: T[]) => U): (...args: (T | undefined)[]) => U | ((...args2: (T | undefined)[]) => U | any);
export default curry;
//# sourceMappingURL=curry.d.ts.map