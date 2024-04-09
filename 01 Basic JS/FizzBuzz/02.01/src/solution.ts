const isDivisibleBy = (...divisors: number[]) => (number: number) => {
  for (let divisor of divisors) {
    if (number % divisor !== 0) return false;
  }
    return true;
}

const fizzBuzz = (number: number) => {
  if (isDivisibleBy(3, 5)(number)) return "FizzBuzz";
  if (isDivisibleBy(3)(number)) return "Fizz";
  if (isDivisibleBy(5)(number)) return "Buzz";
  return number;
}

const fizzBuzzUpTo = (number: number) => {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let result = fizzBuzz(i);
    if (result==="FizzBuzz") {
      count++;
      if(count%3!==0) {
        console.log(i, result);
      }
    }
    else {
      // console.log(i, result);
    }
  }
}

fizzBuzzUpTo(105);