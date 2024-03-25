export default class Cook {
  constructor(name) {
    this.name = name;
    this.mediator = null;
    this.status = "available";
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  prepareOrder() {
    console.log(`${this.name} is listening for an order.`);
    console.log(this.mediator.orders.size());
    if (this.mediator.orders.size() > 0 && this.status === "available") {
      console.log(`${this.name} is available.`);
      console.log(JSON.stringify(this.mediator.orders));
      // const order = this.mediator.orders.shift();
      const order = this.mediator.orders.find((order) => !order.isTaken);
      if (!order) {
        console.warn(`${this.name} didn't find any available order.`);
        return;
      }
      console.string(order);
      // debugger;
      const ingredientsAvailable = order.items.every((item) =>
        this.mediator.requestIngredients(item.ingredients)
      );

      if (ingredientsAvailable && !order.isTaken) {
        console.warn(`${this.name} is preparing: ${order.toString()}`);
        order.isTaken = true;
        this.status = "busy";
        setTimeout(() => {
          console.warn(`${this.name} has finished preparing the order.`);
          this.status = "available";
          this.mediator.deliverOrder(order);
        }, 3000);
        // this.mediator.deliverOrder(order);
      } else if (order.isTaken) {
        console.warn(
          `${this.name} cannot prepare the order ${order.id} because it is taken.`
        );
      } else {
        console.log(
          `${this.name} cannot prepare the order due to missing ingredients.`
        );
      }
    } else if (this.status === "busy") {
      console.warn(`${this.name} is busy.`);
    } else {
      console.warn(`${this.name} is not taking any orders.`);
    }
  }
}
