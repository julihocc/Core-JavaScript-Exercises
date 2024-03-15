export default function deepCopy(obj, hash = new WeakMap()) {
  // Check for circular references to avoid infinite loop
  if (hash.has(obj)) return hash.get(obj);

  // Handle Date
  if (obj instanceof Date) return new Date(obj.valueOf());

  // Handle Array and Object
  if (obj instanceof Object) {
    let result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);

    for (let key of Object.keys(obj)) {
      result[key] = deepCopy(obj[key], hash);
    }

    // Handle special objects like Map, Set, etc.
    // This part could be extended to handle other types as needed.
    if (obj instanceof Map) {
      result = new Map();
      obj.forEach((value, key) => {
        result.set(key, deepCopy(value, hash));
      });
    }

    if (obj instanceof Set) {
      result = new Set();
      obj.forEach((value) => {
        result.add(deepCopy(value, hash));
      });
    }

    return result;
  }

  // Handle primitive types (String, Number, Boolean, null, undefined)
  return obj;
}
