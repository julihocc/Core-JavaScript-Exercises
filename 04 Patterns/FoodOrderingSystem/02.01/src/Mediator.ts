import MinHeap from "./MinHeap.js";
import type Cook from "./Cook.js";
import type Warehouse from "./Warehouse.js";
import type Order from "./Order.js";

export default class Mediator {
  static numberOfOrders = 0;
  cooks: Cook[];
  warehouse: Warehouse | null;
  orders: MinHeap<Order>;
  constructor() {
    this.cooks = [];
    this.warehouse = null;
    this.orders = new MinHeap<Order>();
  }

  registerCook(cook: Cook) {
    this.cooks.push(cook);
    cook.setMediator(this);
  }

  registerWarehouse(warehouse: Warehouse) {
    this.warehouse = warehouse;
    warehouse.setMediator(this);
  }

  placeOrder(order: Order) {
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

  requestIngredients(ingredients: string[]) {
    if (!this.warehouse) {
      console.warn("Warehouse is not available.");
      return false;
    }
    return this.warehouse.provideIngredients(ingredients);
  }

  deliverOrder(order: Order) {
    console.warn(
      `Order for ${order.items.map((item) => item.name).join(", ")} is ready.`
    );
    this.orders.extractMin();
    this.notifyCooks();
  }
}
