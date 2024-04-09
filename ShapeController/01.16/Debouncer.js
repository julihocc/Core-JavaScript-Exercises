/**
 * A class that provides a debounce functionality for functions.
 */
export default class Debouncer {
  constructor() {
    this.timerId = null;
  }

  /**
   * Creates a debounced function that delays invoking the provided function until after wait milliseconds have elapsed since the last time it was invoked.
   *
   * @param {Function} func - The function to debounce.
   * @param {number} wait - The number of milliseconds to delay.
   * @returns {Function} - The debounced function.
   */
  debounce(func, wait) {
    return (...args) => {
      // Clear the timer if it exists
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
      }

      // Set a new timer
      this.timerId = setTimeout(() => {
        func(...args);
      }, wait);
    };
  }
}
