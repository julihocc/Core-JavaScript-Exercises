interface AnyObject {
  [key: string]: any;
}

function createObjectWithGettersAndSetters(
  originalObject: AnyObject
): AnyObject {
  // Create a shallow copy of the original object
  const shallowCopy: AnyObject = { ...originalObject };

  // Use a reducer to iterate over object properties and apply getters and setters
  return Object.keys(shallowCopy).reduce((acc, key) => {
    let propertyValue = shallowCopy[key];
    Object.defineProperty(acc, key, {
      get: function () {
        console.log(`Accessing property '${key}': `, propertyValue);
        return propertyValue;
      },
      set: function (newValue) {
        console.log(
          `Updating property '${key}' from ${propertyValue} to `,
          newValue
        );
        propertyValue = newValue;
      },
      enumerable: true,
      configurable: true,
    });
    return acc;
  }, {} as AnyObject);
}

// Example usage:
const originalObject = { name: "Jane", age: 28 };
const enhancedObject = createObjectWithGettersAndSetters(originalObject);

// Test the getters and setters
console.log(enhancedObject.name); // Access and log the name
enhancedObject.age = 29; // Update the age and log the action
console.log(enhancedObject.age); // Access and log the updated age
