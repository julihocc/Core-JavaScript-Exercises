import MinHeap from "./MinHeap.js";

export default class Mediator {
  static numberOfOrders = 0;
  constructor() {
    this.cooks = [];
    this.warehouse = null;
    // this.orders = [];
    this.orders = new MinHeap();
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
    // this.orders.push(order);
    this.orders.insert(order);
    order.id = ++Mediator.numberOfOrders;
    this.notifyCooks();
  }

  notifyCooks() {
    this.cooks.forEach((cook) => {
      console.log(`Notifying ${cook.name} to prepare some order.`);
      // if (this.orders.length > 0) cook.prepareOrder();
      console.log(this.orders.size());
      if (this.orders.size() > 0) cook.prepareOrder();
    });
  }

  requestIngredients(ingredients) {
    return this.warehouse.provideIngredients(ingredients);
  }

  deliverOrder(order) {
    console.warn(
      `Order for ${order.items.map((item) => item.name).join(", ")} is ready.`
    );
    this.orders.extractMin();
    this.notifyCooks();
  }
}
