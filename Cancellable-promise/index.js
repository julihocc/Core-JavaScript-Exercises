/**
 * Represents a cancellable promise.
 * @class
 * @extends Promise
 */
class CancellablePromise extends Promise {
  constructor(executor) {
    let cancelHandler;
    super((resolve, reject) => {
      // Pass a cancel function to the executor
      cancelHandler = () => {
        reject({ isCancelled: true });
      };
      // Call the original executor with resolve and reject
      executor(resolve, reject);
    });
    this.cancel = cancelHandler;
  }
}

// Usage
const cancellablePromise = new CancellablePromise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 1000);
});

cancellablePromise.then(
  (data) => console.log(data),
  (error) => {
    if (error.isCancelled) {
      console.log("Promise was cancelled");
    } else {
      console.error(error);
    }
  },
);

// Cancel the promise before it resolves
cancellablePromise.cancel();
