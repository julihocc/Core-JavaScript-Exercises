/**
 * Represents a cancellable promise.
 * @class
 * @extends Promise
 */
declare class CancellablePromise<T> extends Promise<T> {
    cancel: () => void;
    constructor(executor: Function);
}
declare const cancellablePromise: CancellablePromise<unknown>;
//# sourceMappingURL=index.d.ts.map