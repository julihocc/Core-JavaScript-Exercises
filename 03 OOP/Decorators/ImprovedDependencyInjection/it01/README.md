## Dependency injection system

A Dependency Injection (DI) system is a design pattern and a core principle in software engineering that aims to reduce hard-coded dependencies among your classes or components, making your application more modular, extensible, and easy to manage, test, and maintain.

### Key Concepts of Dependency Injection:

- **Dependency**: In the context of DI, a dependency refers to an object or service that a class needs to perform its functions. For example, a class that accesses a database might depend on a database service.

- **Injector**: The injector, or DI container, is a central part of the DI system. It's responsible for creating instances of classes and injecting them with all the necessary dependencies at runtime. It abstracts the instantiation process, meaning classes don't need to create their dependencies explicitly.

- **Injection**: This is the process of providing the dependencies that an object needs. Injection can occur in several ways, including constructor injection, setter injection, or method injection. The DI container handles this process based on configuration or annotations in the code.

### Benefits of Using a Dependency Injection System:

- **Decoupling**: DI promotes loose coupling between classes and their dependencies. By reducing direct dependencies, you can change or replace dependencies without modifying the classes that use them.

- **Ease of Testing**: With DI, you can easily substitute real dependencies with mock objects in tests, making unit testing more straightforward and reliable.

- **Flexibility and Reusability**: Classes become more flexible and reusable because they don't hard-code their dependencies. Instead, they work with any implementation that matches the dependency interface.

- **Simplified Dependency Management**: Managing an application's dependencies in one place (the injector or container) simplifies configuration and instantiation logic, making the system easier to understand and modify.

### How It Works:

1. **Define Interfaces**: Define interfaces for your dependencies to abstract their concrete implementations.

2. **Implement Dependencies**: Implement the defined interfaces. These implementations are the actual dependencies that will be injected into your classes.

3. **Configure the Injector**: Configure the DI container by mapping interfaces to their concrete implementations. This configuration tells the DI system which implementations to use when injecting dependencies.

4. **Inject Dependencies**: Use the DI system in your classes to declare dependencies. The DI container will inject the appropriate implementation at runtime.

Dependency Injection is widely used in modern software development, with support in many programming languages and frameworks. It's a key component of many popular frameworks, such as Spring in Java, Angular in TypeScript, and .NET's built-in DI container, demonstrating its importance and effectiveness in building scalable and maintainable software applications.

## `createInjections`

The `createInjections` function serves as a factory for generating the core functionalities needed for a dependency injection system, specifically providing the `injectable` and `inject` decorators. Here's a detailed explanation of its components and how they work together within the context of the provided dependency injection system:

### Overview
- **Purpose**: `createInjections` sets up a dependency injection mechanism by defining decorators that can be used to mark classes as capable of receiving injected dependencies and to specify which dependencies should be injected into class properties.

### `injectable` Decorator
- **Functionality**: This decorator is used to mark a class as being injectable. By doing so, it allows the dependency injection system to recognize that instances of this class can have dependencies injected into them.
- **Implementation Detail**: It associates the class with its injection metadata by using a `WeakMap` (`INJECTIONS`). This metadata will later be used to inject the proper dependencies when instances of the class are created.

### `inject` Decorator
- **Functionality**: The `inject` decorator is used to specify which dependencies should be injected into a particular property of the class. It defines the relationship between a class property (where the dependency will be injected) and the dependency itself.
- **Parameters**:
    - `injectionKey`: A key that identifies the dependency to be injected. This key corresponds to how the dependency is registered in the container.
    - `{ optional = false }`: An options object that allows marking the dependency as optional. If a dependency is optional and not found in the container, the system will not throw an error, allowing for more flexible and resilient applications.
- **Implementation Detail**: It modifies the class's injection metadata (stored in `INJECTIONS`) by adding information about the dependency to be injected, including the key for looking up the dependency in the container, a setter function to inject the dependency into the class instance, and whether the dependency is optional.

### How They Work Together
1. **Marking Classes and Properties**: Developers use `@injectable` to mark classes that should receive injected dependencies and `@inject` to specify which dependencies should be injected into which properties.
2. **Storing Metadata**: Both decorators modify a shared `WeakMap` (`INJECTIONS`), storing metadata about how dependencies should be injected. This metadata includes which properties should receive which dependencies and whether those dependencies are optional.
3. **Creating Instances**: When an instance of an injectable class is created through the container's `create` method, the system uses the stored metadata to inject the appropriate dependencies into the instance based on the keys provided to `@inject`.

### Key Benefits
- **Decoupling**: Allows classes to be decoupled from their dependencies, making the codebase more modular and easier to test.
- **Flexibility**: Supports optional dependencies, enhancing the system's flexibility and resilience.
- **Simplicity**: Simplifies the process of managing class dependencies, making the code cleaner and reducing boilerplate.

This mechanism of using decorators for dependency injection is powerful in JavaScript and TypeScript applications, particularly for organizing and managing large codebases with complex dependency relationships.