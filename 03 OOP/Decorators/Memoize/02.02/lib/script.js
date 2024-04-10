"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
function memoize(target, context) {
    const { kind } = context;
    if (kind !== "method") {
        throw new Error("Memoize can only be used with methods");
    }
    return function (...args) {
        if (!this["memoize"]) {
            this["memoize"] = new Map();
        }
        const cacheKey = JSON.stringify(args);
        if (this["memoize"].has(cacheKey)) {
            console.log("Cache hit!");
            return this["memoize"].get(cacheKey);
        }
        const result = target.apply(this, args);
        this["memoize"].set(cacheKey, result);
        console.log(`Caching result for ${cacheKey}`);
        return result;
    };
}
let Example = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _expensiveOperation_decorators;
    return _a = class Example {
            expensiveOperation(arg) {
                console.log(`Processing very slowly...`);
                // Simulate an expensive operation
                return arg * 2; // Simplified example
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _expensiveOperation_decorators = [memoize];
            __esDecorate(_a, null, _expensiveOperation_decorators, { kind: "method", name: "expensiveOperation", static: false, private: false, access: { has: obj => "expensiveOperation" in obj, get: obj => obj.expensiveOperation }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const example = new Example();
console.log(example.expensiveOperation(2)); // Logs the operation, returns 4
console.log(example.expensiveOperation(2)); // Returns 4 from cache, operation not logged
console.log(example.expensiveOperation(3)); // Logs the operation with new arg, returns 6
