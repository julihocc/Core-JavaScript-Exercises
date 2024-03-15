import RegularCounter from "./RegularCounter.js";
import RomanNumerals from "./RomanNumerals.js";

export default class RegularRomanCounter extends RegularCounter {
  constructor(){
    super("R");
    this.count = 1; 
    this.romanNumerals = new RomanNumerals();
  }

  countFormatted() {
    return this.romanNumerals.toRoman(this.count);    
  }

  reset() {
    this.count = 1;
  }
}