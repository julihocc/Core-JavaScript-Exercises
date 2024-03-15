let variable = function (target) {
  target.property = "GFG is best";
};

// Decorator
@variable
class GFG {}



// Print in the console
console.log(GFG.property);
