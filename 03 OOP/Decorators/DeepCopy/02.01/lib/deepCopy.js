export default function deepCopy(obj, register = new Map()) {
    // console.log("obj: ", obj);
    if (typeof obj !== "object" || obj === null)
        return obj; // Return if obj is a primitive value or null
    // Handle circular references
    if (register.has(obj)) {
        return register.get(obj);
    }
    if (Array.isArray(obj)) {
        console.log("Array: ", obj);
        let resultArray = [];
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
    }
    else {
        let resultObj = {};
        register.set(obj, resultObj);
        Reflect.ownKeys(obj).forEach((key) => {
            // resultObj[key] = deepCopy(obj[key], register);
            resultObj[key] = deepCopy(
            // obj as { [key: string]: any },
            obj[key], register);
        });
        return resultObj;
    }
}
