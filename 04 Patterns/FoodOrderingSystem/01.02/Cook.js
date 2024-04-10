export default class Cook {
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
