export default class Mediator {
  static numberOfOrders = 0;
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
    order.id = ++Mediator.numberOfOrders;
    this.notifyCooks();
  }

  notifyCooks() {
    this.cooks.forEach((cook) => {
      console.log(`Notifying ${cook.name} to prepare some order.`);
      if (this.orders.length > 0) cook.prepareOrder();
    });
  }

  requestIngredients(ingredients) {
    return this.warehouse.provideIngredients(ingredients);
  }

  deliverOrder(order) {
    console.warn(
      `Order for ${order.items.map((item) => item.name).join(", ")} is ready.`
    );
    this.orders.shift();
    this.notifyCooks();
  }
}
