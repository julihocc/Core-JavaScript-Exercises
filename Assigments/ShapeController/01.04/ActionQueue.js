export default class ActionQueue {
  constructor() {
    this.waiting = [];
    this.ready = [];
    this.direction = null;
    this.timer = null;
    this.delayTime = 1000;
    this.processing = false
  }

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Queue action and debounce
  async add(action) {
    console.log(`Pushing ${action.direction} to waiting queue.`);

    if (!this.timer) {
      this.timmer = await this.delay(this.delayTime);
    }
    this.waiting.push(action);
    this.debounceProcess();
  }

  applyReady() {
    if (this.ready) {
      for (let i = 0; i < this.ready.length; i++) {
        this.ready[i].apply();
      }
    }
  }

  async resetTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = await this.delay(this.delayTime);
  }

  async debounceProcess() {
    console.log("Debouncing process");

    if (!this.timer) {
      this.timer = await this.delay(this.delayTime);
    }

    while (this.waiting.length > 0) {
      if (!this.direction) {
        this.direction = this.waiting[0].direction;
      }
      const action = this.waiting.shift();
      if (action.direction === this.direction) {
        this.ready.push(action);
        this.resetTimer();
      } else {
        this.direction = action.direction;
        this.applyReady();
        this.ready = [action];
      }
      this.applyReady();
    }
  }
}
