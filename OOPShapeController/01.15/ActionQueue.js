export default class ActionQueue {
  constructor() {
    this.waiting = false;
    this.timer = null;
    this.waitingList = [];
    this.ready = [];
    this.direction = null;
    this.delayTime = 2000;
    this.compressed = false;
  }

  // Queue action and debounce
  add(action) {
    // console.log(`Pushing ${action.direction} to waiting queue.`);
    this.waitingList.push(action);
    this.debounceProcess();
  }

  dequeue() {
    while (this.ready.length > 0) {
      const action = this.ready.shift();
      // console.log(`Applying ${action.direction}`);
      action.apply();
    }
  }

  debounceProcess() {
    // console.log("Debouncing process");
    // clearTimeout(this.timer);
    while (this.waitingList.length > 0) {
      const action = this.waitingList.shift();
      this.ready.push(action);
    }
    // if (this.compressed) {
    //   // console.log("HODOR!!!");
    //   this.timer = await this.delay(this.delayTime);
    // }
    this.dequeue();
  }
}
