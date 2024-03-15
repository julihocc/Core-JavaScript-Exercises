const INJECTIONS = new WeakMap();

function createInjections() {
  const injections = [];

  function injectable(Class) {
    // Marks a class as injectable and stores its injection metadata
    INJECTIONS.set(Class, injections);
  }

  function inject(injectionKey, { optional = false } = {}) {
    // Decorator function to specify a dependency to be injected.
    // Accepts the dependency key and an options object to mark the dependency as optional.
    return function applyInjection(v, context) {
      // Pushes injection configuration into the class's metadata,
      // including whether the dependency is optional.
      injections.push({ injectionKey, set: context.access.set, optional });
    };
  }

  return { injectable, inject };
}

class Container {
  registry = new Map();

  register(injectionKey, value) {
    // Registers a dependency in the container with a specific key.
    this.registry.set(injectionKey, value);
  }

  lookup(injectionKey, { optional = false } = {}) {
    // Retrieves a registered dependency by key.
    // If the dependency is marked as optional and not found, logs a warning instead of throwing an error.
    const hasDependency = this.registry.has(injectionKey);
    if (!hasDependency && optional) {
      console.warn(`Optional dependency '${injectionKey}' not found.`);
      return undefined;
    } else if (!hasDependency) {
      throw new Error(`Dependency '${injectionKey}' not found.`);
    }
    return this.registry.get(injectionKey);
  }

  create(Class) {
    // Creates an instance of an injectable class and injects the registered dependencies.
    const instance = new Class();

    // Retrieves the class's injection metadata and processes each dependency.
    const injections = INJECTIONS.get(Class) || [];
    injections.forEach(({ injectionKey, set, optional }) => {
      // Looks up each dependency, considering its optional status,
      // and injects it into the class instance.
      const dependency = this.lookup(injectionKey, { optional });
      if (dependency !== undefined) {
        set(instance, dependency);
      }
    });

    return instance;
  }
}

// Usage remains the same
class Store {}

const { injectable, inject } = createInjections();

@injectable
class C {
  @inject("store") store;
}

let container = new Container();
let store = new Store();

container.register("store", store);

let c = container.create(C);

console.log(c.store === store); // true
