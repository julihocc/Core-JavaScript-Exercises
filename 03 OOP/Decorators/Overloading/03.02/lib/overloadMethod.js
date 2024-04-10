export default function overloadMethod(target, context) {
    const { name, addInitializer } = context;
    function initializer() {
        // console.log(`Initializing ${name}`);
        // console.log(`this ${JSON.stringify(this)}`);
        const thisWithMethods = this;
        if (!thisWithMethods._methods) {
            thisWithMethods._methods = {};
        }
        // console.log("this._methods", this._methods);
        if (!thisWithMethods._methods[name]) {
            thisWithMethods._methods[name] = {};
            // console.log("this._methods[name]", this._methods[name]);
        }
        if (!thisWithMethods._methods[name][target.length]) {
            thisWithMethods._methods[name][target.length] = target.bind(this);
        }
        // console.log("this._methods", this._methods);
    }
    addInitializer(initializer);
    return function (...args) {
        // let method = this.methods[name][args.length];
        const thisWithMethods = this;
        let method = thisWithMethods.getMethod(name, args.length);
        if (method) {
            return method(...args);
        }
        else {
            throw new Error("Method does not exist with this number of arguments");
        }
    };
}
