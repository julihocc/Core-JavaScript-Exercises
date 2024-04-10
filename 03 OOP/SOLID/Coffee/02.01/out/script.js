"use strict";
// Beverage class (Component)
// Demonstrates Open/Closed Principle by serving as a base class that can be extended but not modified.
class Beverage {
    description;
    constructor() {
        this.description = "Unknown Beverage";
    }
    getDescription() {
        return this.description;
    }
    // Demonstrates Liskov Substitution Principle by providing a consistent interface for cost calculation.
    cost() {
        throw new Error("This method must be overridden!");
    }
}
// CondimentDecorator class (Decorator)
// Further demonstrates Open/Closed Principle by enabling extension without modification of Beverage.
class CondimentDecorator extends Beverage {
    constructor() {
        super();
    }
    // Ensures subclasses adhere to Beverage's interface, aligning with Liskov Substitution Principle.
    getDescription() {
        throw new Error("This method must be overridden!");
    }
}
// Concrete Components
// Each class below adheres to the Single Responsibility Principle by focusing on a specific beverage type.
// DarkRoast coffee
class DarkRoast extends Beverage {
    constructor() {
        super();
        this.description = "Dark Roast Coffee";
    }
    cost() {
        return 0.99;
    }
}
// Espresso coffee
class Espresso extends Beverage {
    constructor() {
        super();
        this.description = "Espresso";
    }
    cost() {
        return 1.99;
    }
}
// Concrete Decorators
// Each decorator class below also adheres to the Single Responsibility Principle by managing a specific condiment addition.
// Mocha condiment
class Mocha extends CondimentDecorator {
    beverage;
    constructor(beverage) {
        super();
        // Dependency Inversion Principle demonstrated by depending on the abstraction (Beverage) rather than concrete implementation.
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Mocha";
    }
    cost() {
        return this.beverage.cost() + 0.2;
    }
}
// Whip condiment
class Whip extends CondimentDecorator {
    beverage;
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
    getDescription() {
        return this.beverage.getDescription() + ", Whip";
    }
    cost() {
        return this.beverage.cost() + 0.1;
    }
}
// Utilizing the Design
let espresso = new Espresso();
console.log(espresso.getDescription() + " $" + espresso.cost());
let darkRoast = new DarkRoast();
darkRoast = new Mocha(darkRoast); // Decorating with Mocha
darkRoast = new Whip(darkRoast); // Further decorating with Whip
console.log(darkRoast.getDescription() + " $" + darkRoast.cost());
