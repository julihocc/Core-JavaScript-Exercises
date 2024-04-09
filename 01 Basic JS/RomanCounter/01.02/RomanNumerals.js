export default class RomanNumerals {
  constructor() {
    this.romanToIntMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    this.intToRomanMap = {
      1: "I",
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
      100: "C",
      400: "CD",
      500: "D",
      900: "CM",
      1000: "M",
    };
  }

  toRoman(num) {
    let result = "";
    let keys = Object.keys(this.intToRomanMap).reverse();

    if (num>=4000) throw new Error("Number should be less than 4000")

    for (let key of keys) {
      let value = parseInt(key);
      while (num >= value) {
        result += this.intToRomanMap[key];
        num -= value;
      }
    }

    return result;
  }

  fromRoman(roman) {
    let result = 0;
    let i = 0;

    while (i < roman.length) {
      let currentSymbol = roman[i];
      let currentValue = this.romanToIntMap[currentSymbol];
      let nextValue = 0;

      if (i + 1 < roman.length) {
        nextValue = this.romanToIntMap[roman[i + 1]];
      }

      if (currentValue < nextValue) {
        result += nextValue - currentValue;
        i += 2;
      } else {
        result += currentValue;
        i += 1;
      }
    }

    return result;
  }
}
