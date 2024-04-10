
function curry<T extends any[], R>(
  fn: (...args: T) => R
): CurriedFunction<T, R> {
  return function curried(...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(null, args as T);
    } else {
      return function (...args2: any[]) {
        return curried.apply(null, args.concat(args2));
      };
    }
  } as CurriedFunction<T, R>;
}


type CurriedFunction<T extends any[], R> = T extends [
  infer First,
  ...infer Rest
]
  ? (arg: First) => CurriedFunction<Rest, R>
  : R;


function add(a: number, b: number, c: number): number {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); 


function concat(a: string, b: string, c: string): string {
  return a + b + c;
}

const curriedConcat = curry(concat);
console.log(curriedConcat("Hello")(" ")("World!")); 
