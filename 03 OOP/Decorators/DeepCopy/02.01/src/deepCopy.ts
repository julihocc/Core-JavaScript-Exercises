

export default function deepCopy<T extends object>(
  obj: T & { [key: string]: any },
  register = new Map()
) {
  // console.log("obj: ", obj);
  if (typeof obj !== "object" || obj === null) return obj; // Return if obj is a primitive value or null

  // Handle circular references
  if (register.has(obj)) {
    return register.get(obj);
  }

  if (Array.isArray(obj)) {
    console.log("Array: ", obj);
    let resultArray: any[] = [];
    register.set(obj, resultArray);
    // obj.forEach((item, index) => {
    //   resultArray[index] = deepCopy(item, register);
    // });

    for (let i = 0; i < obj.length; i++) {
      // resultArray[i] = deepCopy(obj[i], register);
      resultArray.push(deepCopy(obj[i], register));
    }
    // console.log("resultArray: ", resultArray);
    return resultArray;
  } else {
    let resultObj: { [key: string]: any } = {};
    register.set(obj, resultObj);
    Reflect.ownKeys(obj).forEach((key) => {
      // resultObj[key] = deepCopy(obj[key], register);
      resultObj[key as string] = deepCopy(
        // obj as { [key: string]: any },
        obj[key as string],
        register
      );
    });
    return resultObj;
  }
}
