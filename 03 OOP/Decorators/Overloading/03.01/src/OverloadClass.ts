import { cloneDeep } from "lodash";

type Constructor<T = {}> = new (...args: any[]) => T;

interface Methods {
  [key: string]: {
    [key: number]: Function;
  };
}

export default function OverloadClass<T extends Constructor>(
  target: T
) {
  return class Overload extends target {
    #methods: Methods | null;
    _methods?: Methods | null;
    label: string;
    constructor(...args: any[]) {
      super(...args);
      this.label = "Overload";
      this.#methods = cloneDeep(this._methods) || null;
      // console.log("this._methods=", this._methods);
      // console.log("this.#methods=", this.#methods);
      delete this._methods;
      // console.log("this._methods=", this._methods);
      // console.log("this.#methods=", this.#methods);
    }
    get methods() {
      return this.#methods;
    }
    getMethod(methodName: string, methodLength: number) {
      // console.log(`getMethod(${methodName}, ${methodLength})`)
      // console.log(`this.#methods=${JSON.stringify(this.#methods)}`)
      if (!this.#methods) {
        return null;
      }
      return this.#methods[methodName][methodLength];
    }
    addMethod(methodName: string, implementation: Function) {
      if (!this.methods) {
        return;
      }

      if (!this.methods[methodName]) {
        this.methods[methodName] = {};
      }

      this.methods[methodName][implementation.length] =
        implementation.bind(this);
    }
  };
}
