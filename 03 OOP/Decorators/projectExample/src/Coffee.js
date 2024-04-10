function Coffee() {
  this.cost = function () {
    return 5;
  };
}

function withMilk(coffee) {
  const oldCost = coffee.cost;
  coffee.cost = function () {
    return oldCost() + 1.5;
  };
  return coffee;
}

function withWhip(coffee) {
  const oldCost = coffee.cost;
  coffee.cost = function () {
    return oldCost() + 2.0;
  };
  return coffee;
}

function withSugar(coffee) {
  const oldCost = coffee.cost;
  coffee.cost = function () {
    return oldCost() + 0.5;
  };
  return coffee;
}

let myCoffee = new Coffee();
console.log('Original coffee cost: ' + myCoffee.cost()); // Output: 5

myCoffee = withMilk(myCoffee);
console.log('Coffee with milk cost: ' + myCoffee.cost()); // Output: 6.5

myCoffee = withWhip(myCoffee);
console.log('Coffee with milk and whip cost: ' + myCoffee.cost()); // Output: 8.5

myCoffee = withSugar(myCoffee);
console.log('Coffee with all additions cost: ' + myCoffee.cost()); // Output: 9
