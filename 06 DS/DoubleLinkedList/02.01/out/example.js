import DoublyLinkedList from "./DLL.js";
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
console.log("After appending 1, 2, 3:");
let current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}
list.prepend(0);
console.log("After prepending 0:");
current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}
const found = list.find(2);
console.log("Found element:", found ? found.value : "Not found");
list.remove(2);
console.log("After removing 2:");
current = list.head;
while (current) {
    console.log(current.value);
    current = current.next;
}
const notFound = list.find(2);
console.log("After removal, find 2:", notFound ? notFound.value : "Not found");
