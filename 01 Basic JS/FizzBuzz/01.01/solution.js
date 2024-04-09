const isDivisibleBy = (...divisors) => (number) => {
  for (let divisor of divisors) {
    if (number % divisor !== 0) return false;
  }
    return true;
}

const fizzBuzz = (number) => {
  if (isDivisibleBy(3, 5)(number)) return "FizzBuzz";
  if (isDivisibleBy(3)(number)) return "Fizz";
  if (isDivisibleBy(5)(number)) return "Buzz";
  return number;
}

const fizzBuzzUpTo = (number) => {
  for (let i = 1; i <= number; i++) {
    console.log(i, fizzBuzz(i));
  }
}

fizzBuzzUpTo(15);