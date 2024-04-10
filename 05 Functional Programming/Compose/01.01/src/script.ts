type Func<T> = (arg: T) => T;

function compose<T>(...funcs: Func<T>[]): Func<T> {
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

const double = (x: number) => x * 2;
const square = (x: number) => x * x;

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3)); // Outputs: 36 ((3*2)^2)
