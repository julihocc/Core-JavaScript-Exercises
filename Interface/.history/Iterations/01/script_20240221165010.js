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

// Create an interface called "Animal" that has the following methods:
// - eat()
// - move()
// - makeSound()

function create

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
