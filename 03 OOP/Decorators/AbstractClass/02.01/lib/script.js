"use strict";
// interface Context {
//   kind: "class" | "method";
//   name: string;
// }
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
// function abstractClass<T extends Constructor>(
//   value: T,
//   context: ClassDecoratorContext<T>
// ): T;
function abstractClass(value, context) {
    const { kind, name } = context;
    // console.log(`value: ${value}`);
    // console.log(`kind: ${kind}, name: ${name}`);
    if (kind === "class") {
        return class Abstract extends value {
            constructor(...args) {
                if (new.target === Abstract) {
                    throw new Error(`${name} class cannot be instantiated`);
                }
                super(...args);
            }
        };
    }
}
// function abstractMethod<T extends Method>(
//   value: T,
//   context: ClassMethodDecoratorContext<T>
// ): T;
function abstractMethod(value, context) {
    const { kind, name } = context;
    // console.log(`value: ${value}`);
    // console.log(`kind: ${kind}, name: ${name}`);
    if (kind === "method") {
        return function () {
            throw new Error(`${String(name)} method cannot be called`);
        };
    }
}
let Person = (() => {
    let _classDecorators = [abstractClass];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _work_decorators;
    var Person = _classThis = class {
        work() { }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    __setFunctionName(_classThis, "Person");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _work_decorators = [abstractMethod];
        __esDecorate(_classThis, null, _work_decorators, { kind: "method", name: "work", static: false, private: false, access: { has: obj => "work" in obj, get: obj => obj.work }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
})();
try {
    new Person();
}
catch (error) {
    if (error instanceof Error)
        console.error(error.message); // Abstract classes cannot be instantiated
}
class Student extends Person {
    constructor() {
        super();
        console.log("Student class instantiated");
    }
}
const student = new Student();
try {
    console.log(student.work());
}
catch (error) {
    if (error instanceof Error)
        console.error(error.message); // Abstract methods cannot be called
}
class Teacher extends Person {
    work() {
        console.log("I'm working...");
    }
}
const teacher = new Teacher();
teacher.work();
