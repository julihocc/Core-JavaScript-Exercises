class Mediator {
  constructor() {
    this.cooks = [];
    this.orders = [];
    this.warehouse = null;
  }

  registerCook(cook) {
    this.cooks.push(cook);
    cook.setMediator(this);
  }

  registerWarehouse(warehouse) {
    this.warehouse = warehouse;
    warehouse.setMediator(this);
  }

  placeOrder(order) {
    this.orders.push(order);
    this.notifyCooks();
  }

  notifyCooks() {
    this.cooks.forEach((cook) => {
      console.log(`Notifying ${cook.name} to prepare order.`);
      if (this.orders.length > 0) cook.prepareOrder();
    });
  }

  requestIngredients(ingredients) {
    return this.warehouse.provideIngredients(ingredients);
  }

  deliverOrder(order) {
    console.log(
      `Order for ${order.items.map((item) => item.name).join(", ")} is ready.`
    );
    this.orders.shift();
    this.notifyCooks();
  }
}

class Cook {
  constructor(name) {
    this.name = name;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  prepareOrder() {
    console.log(`${this.name} is listening for an order.`);
    if (this.mediator.orders.length > 0) {
      console.log(`${this.name} takes this order.`);
      const order = this.mediator.orders[0];
      const ingredientsAvailable = order.items.every((item) =>
        this.mediator.requestIngredients(item.ingredients)
      );

      if (ingredientsAvailable) {
        console.log(
          `${this.name} is preparing ${order.items
            .map((item) => item.name)
            .join(", ")}.`
        );
        this.mediator.deliverOrder(order);
      } else {
        console.log(
          `${this.name} cannot prepare the order due to missing ingredients.`
        );
      }
    }
  }
}

class Warehouse {
  constructor(stock) {
    this.stock = stock;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  provideIngredients(ingredients) {
    return ingredients.every((ingredient) => {
      if (!this.stock[ingredient] || this.stock[ingredient] <= 0) return false;
      this.stock[ingredient] -= 1;
      return true;
    });
  }
}

const mediator = new Mediator();
const cook1 = new Cook("Ana");
const cook2 = new Cook("Beto");
const warehouse = new Warehouse({
  flour: 20,
  cheese: 10,
  chicken: 5,
  sauce: 8,
});

class Food {
  constructor(name, ingredients) {
    this.name = name;
    this.ingredients = ingredients;
  }
}

class Order {
  constructor(items) {
    this.items = items;
  }
}

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
