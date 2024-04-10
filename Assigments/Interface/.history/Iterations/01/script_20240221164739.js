function implements(className, interfaceName) {
    console.log(className);
    let interfaceMethods = Object.getOwnPropertyNames(interfaceName.prototype);
    let classMethods = Object.getOwnPropertyNames(className.prototype);
    for (let method of interfaceMethods) {
        if (!classMethods.includes(method)) {
            return false;
        }
    }
    return true;
}

// Create an interface called "Animal" that has the following methods:
// - eat()
// - move()
// - makeSound()

const Animal = function() {
    this.eat = function() {}  
    this.move = function() {}
    this.makeSound = function() {}
}

class Dog {
    eat() {}
    move() {}
    makeSound() {}
}

class Rock {
    move() {}
}

console.log(implements(Dog, Animal)); // true
console.log(implements(Rock, Animal)); // false
