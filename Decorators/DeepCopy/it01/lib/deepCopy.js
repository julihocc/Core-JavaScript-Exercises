"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = deepCopy;
function deepCopy(obj) {
  var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new WeakMap();
  // Check for circular references to avoid infinite loop
  if (hash.has(obj)) return hash.get(obj);

  // Handle Date
  if (obj instanceof Date) return new Date(obj.valueOf());

  // Handle Array and Object
  if (obj instanceof Object) {
    var result = Array.isArray(obj) ? [] : {};
    hash.set(obj, result);
    for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      result[key] = deepCopy(obj[key], hash);
    }

    // Handle special objects like Map, Set, etc.
    // This part could be extended to handle other types as needed.
    if (obj instanceof Map) {
      result = new Map();
      obj.forEach(function (value, key) {
        result.set(key, deepCopy(value, hash));
      });
    }
    if (obj instanceof Set) {
      result = new Set();
      obj.forEach(function (value) {
        result.add(deepCopy(value, hash));
      });
    }
    return result;
  }

  // Handle primitive types (String, Number, Boolean, null, undefined)
  return obj;
}