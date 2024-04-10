type Getter<T> = () => T;
type Setter<T> = (value: T) => void;

const obj = { a: 1, b: 1 };
const obj2 = { c: "hello", d: "world", e: true, run: () => {} };

type NeverFn<T> = {
  [key in keyof T]: T[key] extends Function ? never : key;
};

type NotAMethodKeys<T> = NeverFn<T>[keyof T];

// Type that inforce getters and setters
// type Obj<T> = {
//   [key in keyof T as `get${Capitalize<string & key>}`]: Getter<T[key]>;
// } & {
//   [key in keyof T as `set${Capitalize<string & key>}`]: Setter<T[key]>;
// };
type Obj<T> = {
  [key in NotAMethodKeys<T> as `get${Capitalize<string & key>}`]: Getter<
    T[key]
  >;
} & {
  [key in NotAMethodKeys<T> as `set${Capitalize<string & key>}`]: Setter<
    T[key]
  >;
};

type MyObj2 = Obj<typeof obj2>;

const obj3: MyObj2 = {
  getC: () => "fizz",
  getD: () => "buzz",
  getE: () => false,
  setC: (value: string) => console.log(value),
  setD: (value: string) => console.log(value),
  setE: (value: boolean) => console.log(value),
};

const obj4 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

const obj5: { a: number; c: number } = obj4;
console.log(obj5);

// Tasks: 
// Create a shallow copy of an object and set the getters an setters
// Get that done using reducer
// Take a setup validator function