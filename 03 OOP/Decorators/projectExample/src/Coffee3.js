function withMilk(target) {
  console.log(arguments)
  return class extends target {
    cost() {
      let newCost = super.cost() + 1.5;
      // console.log("Coffee with milk cost: " + newCost);
      return newCost;
    }
  };
}

@withMilk
class Coffee {
  cost() {
    return 5;
  }
}

let myCoffee = new Coffee();
console.log(myCoffee.cost()); // Output: 6.5

// implement a bind decorator
// implement an overload decorator
// implement dependecy injection 