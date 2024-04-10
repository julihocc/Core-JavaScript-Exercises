export type ArgsType<T> = T extends (...args: infer U) => any ? U : never;

export type IsEmptyTuple<T extends any[]> = T extends [] ? true : false;

export type CurriedFunction<Args extends any[], R> = <A extends any[]>(
  ...args: A
) => IsEmptyTuple<Args> extends true
  ? R
  : Args extends [...A, ...infer Rest]
  ? Rest extends any[]
    ? CurriedFunction<Rest, R>
    : never
  : never;
