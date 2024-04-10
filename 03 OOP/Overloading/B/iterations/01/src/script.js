// Decorator factory to apply method overloading
function Overloaded(methodMap) {
  return function (target, context) {
    const originalMethod = target;

    return function (...args) {
      // Determine overload key based on arguments length
      const overloadKey = args.length;

      // Check if an overload for the given number of arguments exists
      if (methodMap.hasOwnProperty(overloadKey)) {
        return methodMap[overloadKey].apply(this, args);
      }
      // Fallback to the original method if no overload matches
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

// Example usage of the Overloaded decorator
class Calculator {
  @Overloaded({
    1: function (number) {
      console.log("Incrementing:", number);
      return number + 1;
    },
    2: function (a, b) {
      console.log("Adding:", a, b);
      return a + b;
    },
  })
  calculate(...args) {
    console.log("Default implementation", args);
    // Default implementation or error handling
  }
}

const calc = new Calculator();
calc.calculate(5); // Calls the 1 argument overload
calc.calculate(5, 10); // Calls the 2 arguments overload
calc.calculate(1, 2, 3); // Calls the default implementation
