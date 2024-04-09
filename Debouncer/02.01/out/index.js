"use strict";
/**
 * A class that provides a debounce functionality for functions.
 */
class Debouncer {
  timerId;
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
// Usage
// Create an instance of the Debouncer class
const debouncer = new Debouncer();
// Example function that we want to debounce
const logMessage = (message) => console.log(message);
// Debounce the logMessage function with a 500ms wait time
const debouncedLogMessage = debouncer.debounce(logMessage, 500);
// Call the debounced function multiple times
debouncedLogMessage("Hello, World!"); // This call will be ignored
debouncedLogMessage("Debouncing"); // This call will be ignored
debouncedLogMessage("Implementation"); // Only this call will be executed after 500ms
