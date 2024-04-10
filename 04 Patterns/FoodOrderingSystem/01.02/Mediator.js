export default class Mediator {
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
