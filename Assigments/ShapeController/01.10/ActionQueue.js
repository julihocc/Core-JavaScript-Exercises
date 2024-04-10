export default class ActionQueue {
  constructor() {
    this.waiting = false;
    this.timer = null;
    this.waitingList = [];
    this.ready = [];
    this.direction = null;
    this.timer = null;
    this.delayTime = 2000;
    this.compressed = false;
  }

  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Queue action and debounce
  async add(action) {
    console.log(`Pushing ${action.direction} to waiting queue.`);
    this.waitingList.push(action);
    this.debounceProcess();
  }

  apply() {
    while (this.ready.length > 0) {
      const action = this.ready.shift();
      console.log(`Applying ${action.direction}`);
      action.apply();
    }
  }

  // TODO Make the movement smoother
  async debounceProcess() {
    console.log("Debouncing process");
    clearTimeout(this.timer);
    while (this.waitingList.length > 0) {
      console.log("this.direction", this.direction);
      console.log(
        "this.waiting",
        this.waitingList.map((action) => action.direction)
      );
      console.log(
        "this.ready",
        this.ready.map((action) => action.direction)
      );
      const action = this.waitingList.shift();
      if (action.direction !== this.direction) {
        this.direction = action.direction;
        this.apply();
      }
      this.ready.push(action);
    }
    if (this.compressed) {
      // console.log("HODOR!!!");
      this.timer = await this.delay(this.delayTime);
    }
    this.apply();
  }
}
