export class CancellablePromise extends Promise {
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
