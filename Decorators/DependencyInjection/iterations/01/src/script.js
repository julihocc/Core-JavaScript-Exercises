const INJECTIONS = new WeakMap();

function createInjections() {
  const injections = [];

  function injectable(Class) {
    console.log("injectable");
    INJECTIONS.set(Class, injections);
    console.log(INJECTIONS);
  }

  function inject(injectionKey) {
    console.log("inject");
    console.log(injectionKey);
    return function applyInjection(v, context) {
      console.log("applyInjection");
      console.log(injectionKey);
      console.log(v);
      console.log(context.access);
      injections.push({ injectionKey, set: context.access.set });
      console.log(injections);
    };
  }

  return { injectable, inject };
}

class Container {
  registry = new Map();

  register(injectionKey, value) {
    this.registry.set(injectionKey, value);
  }

  lookup(injectionKey) {
    this.registry.get(injectionKey);
  }

  create(Class) {
    let instance = new Class();

    for (const { injectionKey, set } of INJECTIONS.get(Class) || []) {
      set.call(instance, this.lookup(injectionKey));
    }

    return instance;
  }
}

class Store {}

let container = new Container();
let store = new Store();

container.register("store", store);

const { injectable, inject } = createInjections();

@injectable
class C {
  store = null;
  
  @(inject("store"))
  store;
}

let c = container.create(C);

// // c.store === store; // true
// console.log(c.store)
// console.log(store)
// console.log(c.store === store)
