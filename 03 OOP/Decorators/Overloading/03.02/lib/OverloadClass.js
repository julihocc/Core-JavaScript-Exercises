var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
// import { cloneDeep } from "lodash";
import lodash from "lodash";
const { cloneDeep } = lodash;
export default function OverloadClass(target, context) {
    var _Overload_methods, _a;
    return _a = class Overload extends target {
            constructor(...args) {
                super(...args);
                _Overload_methods.set(this, void 0);
                this.label = "Overload";
                __classPrivateFieldSet(this, _Overload_methods, cloneDeep(this._methods) || null, "f");
                // console.log("this._methods=", this._methods);
                // console.log("this.#methods=", this.#methods);
                delete this._methods;
                // console.log("this._methods=", this._methods);
                // console.log("this.#methods=", this.#methods);
            }
            get methods() {
                return __classPrivateFieldGet(this, _Overload_methods, "f");
            }
            getMethod(methodName, methodLength) {
                // console.log(`getMethod(${methodName}, ${methodLength})`)
                // console.log(`this.#methods=${JSON.stringify(this.#methods)}`)
                if (!__classPrivateFieldGet(this, _Overload_methods, "f")) {
                    return null;
                }
                return __classPrivateFieldGet(this, _Overload_methods, "f")[methodName][methodLength];
            }
            addMethod(methodName, implementation) {
                if (!this.methods) {
                    return;
                }
                if (!this.methods[methodName]) {
                    this.methods[methodName] = {};
                }
                this.methods[methodName][implementation.length] =
                    implementation.bind(this);
            }
        },
        _Overload_methods = new WeakMap(),
        _a;
}
