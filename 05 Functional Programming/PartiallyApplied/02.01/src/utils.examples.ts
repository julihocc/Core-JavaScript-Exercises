import { ArgsType, IsEmptyTuple } from "./utils.js";

// ArgsType
function example(a: number, b: string, c: boolean) {
  // do something
}

type ExampleArgs = ArgsType<typeof example>; // [number, string, boolean]

function example2(...args: ExampleArgs): void;
function example2(a: number, b: string, c: boolean) {
  // do something
}

// IsEmptyTuple
type EmptyCheck1 = IsEmptyTuple<[]>; // true
const emptyValue: EmptyCheck1 = true;

type EmptyCheck2 = IsEmptyTuple<[number, string]>; // false
const nonEmptyValue: EmptyCheck2 = false;

type EmptyCheck3 = IsEmptyTuple<number[]>; // false
const nonEmptyValue2: EmptyCheck3 = false;
