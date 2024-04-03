export default class Warehouse {
    stock;
    mediator;
    constructor(stock) {
        this.stock = stock;
        this.mediator = null;
    }
    setMediator(mediator) {
        this.mediator = mediator;
    }
    provideIngredients(ingredients) {
        return ingredients.every((ingredient) => {
            if (!this.stock[ingredient] || this.stock[ingredient] <= 0)
                return false;
            this.stock[ingredient] -= 1;
            return true;
        });
    }
}
