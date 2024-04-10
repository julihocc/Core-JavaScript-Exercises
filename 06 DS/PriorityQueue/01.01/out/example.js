import PriorityQueue from "./PriorityQueue.js";
const taskQueue = new PriorityQueue();
taskQueue.enqueue("Send email", 2);
taskQueue.enqueue("Write report", 1);
taskQueue.enqueue("Fix bug", 0);
taskQueue.enqueue("Update documentation", 3);
while (!taskQueue.isEmpty()) {
    const task = taskQueue.dequeue();
    console.log(`Processing task: ${task.element} with priority ${task.priority}`);
}
