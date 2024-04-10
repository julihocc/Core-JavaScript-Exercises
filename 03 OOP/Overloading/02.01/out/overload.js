import OverloadedMethod from "./OverloadedMethod.js";
export default function overload(instance, nameOfMethod, methodImplementation) {
    const prefix = "__OVERLOADED_METHOD__";
    const overloadedMethodName = prefix + nameOfMethod;
    if (!instance[overloadedMethodName]) {
        instance[overloadedMethodName] = new OverloadedMethod(nameOfMethod, instance);
        if (instance[nameOfMethod]) {
            instance[overloadedMethodName].addMethod(instance[nameOfMethod]);
        }
    }
    instance[overloadedMethodName].addMethod(methodImplementation);
    instance[nameOfMethod] = instance[overloadedMethodName].executeMethod.bind(instance[overloadedMethodName]);
}
