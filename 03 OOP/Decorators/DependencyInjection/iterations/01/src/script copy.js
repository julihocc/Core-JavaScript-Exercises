const INJECTIONS = new WeakMap(); // The map of injections for each class.

/**
 * Creates an object with methods for registering and applying dependency injections.
 * @returns {Object} - The object with injectable and inject methods.
 */
function createInjections() {
  const injections = []; // The injections for the current class.

  /**
   * Marks a class as injectable, allowing it to be registered for dependency injection.
   * @param {Function} Class - The class to mark as injectable.
   * @returns {void}
   */
  function injectable(Class) {
    INJECTIONS.set(Class, injections);
  }

  /**
   * Creates a function that applies an injection to a given value and context.
   * @param {string} injectionKey - The key for the injection.
   * @returns {Function} - The function that applies the injection.
   */
  function inject(injectionKey) {
    return function applyInjection(v, context) {
      injections.push({ injectionKey, set: context.access.set });
    };
  }

  return { injectable, inject };
}

/**
 * Represents a container for dependency injection.
 */
class Container {
  registry = new Map(); // The registry of injections.

  /**
   * Registers a value with the given injection key in the registry.
   * @param {string} injectionKey - The key used for injection.
   * @param {*} value - The value to be registered.
   */
  register(injectionKey, value) {
    this.registry.set(injectionKey, value);
  }

  /**
   * Looks up a dependency in the registry based on the injection key.
   * @param {string} injectionKey - The key used to identify the dependency in the registry.
   * @returns {*} - The dependency associated with the injection key.
   */
  lookup(injectionKey) {
    this.registry.get(injectionKey);
  }

  /**
   * Creates an instance of a class with dependency injection.
   * @param {Function} Class - The class to create an instance of.
   * @returns {Object} - The created instance.
   */
  create(Class) {
    let instance = new Class();

    for (const { injectionKey, set } of INJECTIONS.get(Class) || []) {
      set.call(instance, this.lookup(injectionKey));
    }

    return instance;
  }
}

class Store {} // A class to be used as a dependency.

const { injectable, inject } = createInjections(); // Create the injectable and inject methods.

/**
 * @class C
 * @classdesc Represents a class that is injectable.
 * @injectable
 */
@injectable // Mark the class as injectable.
class C {
  @inject("store") store; // Inject the store dependency.
}

let container = new Container(); // Create a new container.
let store = new Store(); // Create a new store.

container.register("store", store); // Register the store in the container.

let c = container.create(C); // Create an instance of C with dependency injection.

c.store === store; // true - The store was injected into the instance of C.
