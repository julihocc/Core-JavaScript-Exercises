let variable = function (target) {
  target.property = "GFG is best";
};

// Decorator
// @variable
class GFG {
  static fn(){
    return this.prop.toUpperCase()
  }

  static prop = "Static prop"

  static {
    console.log("hello static")
  }
}


// Print in the console
console.log(GFG.property);
