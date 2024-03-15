import StepCounter from "./StepCounter.js";
import RomanNumerals from "./RomanNumerals.js";

export default class StepRomanCounter extends StepCounter {
  constructor(step){
    super(step, "R");
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

