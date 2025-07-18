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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import OverloadClass from "./OverloadClass.js";
import overloadMethod from "./overloadMethod.js";
let MyClass = (() => {
    let _classDecorators = [OverloadClass];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _test_decorators;
    var MyClass = _classThis = class {
        constructor(name) {
            this.name = __runInitializers(this, _instanceExtraInitializers);
            this.name = name;
        }
        test(...args) {
            return "Initial implementation";
        }
    };
    __setFunctionName(_classThis, "MyClass");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _test_decorators = [overloadMethod];
        __esDecorate(_classThis, null, _test_decorators, { kind: "method", name: "test", static: false, private: false, access: { has: obj => "test" in obj, get: obj => obj.test }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MyClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MyClass = _classThis;
})();
let obj = new MyClass("Example");
// console.log("obj.label", obj.label);
obj.methods;
console.log("obj.methods", obj.methods);
console.log("obj.test()", obj.test());
try {
    console.log("obj.test()", obj.test());
}
catch (error) {
    if (error instanceof Error)
        console.error(error.message);
}
obj.addMethod("test", function () {
    return "Overloaded implementation";
});
console.log("obj.test()", obj.test());
obj.addMethod("test", function () {
    return this.name;
});
console.log("obj.test()", obj.test());
obj.addMethod("test", function (a) {
    return "Overloaded implementation " + a;
});
console.log('obj.test("with argument")', obj.test("with argument"));
obj.addMethod("test", function (a, b) {
    return "Overloaded implementation " + a + " " + b;
});
console.log('obj.test("with argument", "and another")', obj.test("with argument", "and another"));
try {
    obj.test("with argument", "and another", "and another");
}
catch (e) {
    if (e instanceof Error)
        console.log(e.message);
}
