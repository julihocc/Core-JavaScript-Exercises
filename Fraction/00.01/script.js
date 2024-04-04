class Fraction extends Number{
  constructor(numerator, denominator){
    super();
    this.numerator = numerator;
    this.denominator = denominator;
  }
  valueOf(){
    return this.numerator / this.denominator;
  }
}

const f = new Fraction(1, 2);
console.log(f + 1); // 1.5 

const g = new Fraction(3, 2);
console.log(f+g)