// ***Task:
// Object.overload(instance, nameOfMethod, methodImplementation);
// If method does not exists create
// If already exists check the number of arguments and execute the right one.
// If there are no matches (based on the number of arguments) throw an error.

Object.overload = function (instance, nameOfMethod, methodImplementation) {
  if (!instance[nameOfMethod]) {
    instance[nameOfMethod] = methodImplementation;
  } else {
    if (instance[nameOfMethod].length === methodImplementation.length) {
      instance[nameOfMethod] = methodImplementation;
    } else {
      throw new Error('Method already exists with different number of arguments');
    }
  }
};

// Example usage:
let obj = {};

Object.overload(obj, 'test', function () {
  console.log('no arguments');
});
obj.test();

Object.overload(obj, 'test', function () {
  console.log('reimplementation');
});
obj.test();

// FIX-ME this shouldn't throw an error
try {
  Object.overload(obj, 'test', function (a) {
    console.log('one argument');
  });
} catch (e) {
  console.error(e.message);
}

obj.test();	 // ok
obj.test(1); // ok
obj.test(1, 2); // not ok