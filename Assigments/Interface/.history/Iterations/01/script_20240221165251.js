function implements(className, interfaceName) {
    let interfaceMethods = Object.getOwnPropertyNames(interfaceName.prototype);
    let classMethods = Object.getOwnPropertyNames(className.prototype);
    console.log(interfaceMethods);
    console.log(classMethods);
    for (let method of interfaceMethods) {
        if (!classMethods.includes(method)) {
            return false;
        }
    }
    return true;
}

function createInterface(name, methods) {
    let newInterface = function() {};
    newInterface.prototype = methods;
    return newInterface;
}

// Create an interface called "Animal" that has the following methods:
// - eat()
// - move()
// - makeSound()

let Animal = createInterface("Animal", {
    eat() {},
    move() {},
    makeSound() {}
});

class Dog {
    eat() { return "I'm eating"; }
    move() { return "I'm moving"; }
    makeSound() { return "I'm barking";}
}

class Rock {
    move() {}
}

class Human {
    eat() { return "I'm eating"; }
    move() { return "I'm moving"; }
    makeSound() { return "I'm talking";}
    read() { return "I'm reading"; 
}

console.log(implements(Dog, Animal)); // true
console.log(implements(Rock, Animal)); // false
