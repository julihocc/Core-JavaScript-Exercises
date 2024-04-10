import Mediator from "./Mediator.js";
import Cook from "./Cook.js";
import Warehouse from "./Warehouse.js";
import Food from "./Food.js";
import Order from "./Order.js";

console.clear();

console.string = (obj) => console.log(obj.toString());
console.stringify = (obj) => JSON.stringify(obj, null, 2);

const mediator = new Mediator();
const cook1 = new Cook("Ana");
const cook2 = new Cook("Beto");
const warehouse = new Warehouse({
  flour: 20,
  cheese: 10,
  chicken: 5,
  sauce: 8,
});

mediator.registerCook(cook1);
mediator.registerCook(cook2);
mediator.registerWarehouse(warehouse);

mediator.placeOrder(
  new Order([
    new Food("Pizza", ["flour", "cheese", "sauce"]),
    new Food("Chicken Pie", ["flour", "chicken"]),
  ])
);

mediator.placeOrder(
  new Order([new Food("Cheese Pizza", ["flour", "cheese", "sauce"])])
);
