import type Mediator from "./Mediator.js";

export default class Warehouse {
  stock: Record<string, number>;
  mediator: Mediator | null;
  constructor(stock: Record<string, number>) {
    this.stock = stock;
    this.mediator = null;
  }

  setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  provideIngredients(ingredients: string[]) {
    return ingredients.every((ingredient) => {
      if (!this.stock[ingredient] || this.stock[ingredient] <= 0) return false;
      this.stock[ingredient] -= 1;
      return true;
    });
  }
}
