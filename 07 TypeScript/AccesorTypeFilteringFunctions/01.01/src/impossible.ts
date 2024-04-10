// type Value = string | number | never | number | void

type ImpossibleType = {
  numberValue: number;
  voidValue: void;
  neverValue: never;
};

// //Nothing could be assigned to never

// const impossibleValue: ImpossibleValue = {
//   numberValue: 1,
//   voidValue: undefined,
//   neverValue: ,
// }

type ImpossibleKeys = keyof ImpossibleType;
type ImpossibleValues = ImpossibleType[keyof ImpossibleType];

type NeverFn<T> = {
  [key in keyof T]: () => T[key] extends Function ? never : key;
};

type NotAMethod<T> = NeverFn<T>[keyof T];

export {};
