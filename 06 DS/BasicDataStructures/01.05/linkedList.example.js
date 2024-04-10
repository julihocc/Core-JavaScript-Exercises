import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
console.log(list.length); // 0
list.append(1);
console.log(list.length); // 1
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
console.log(list.length); // 7

// const [first, second] = list.split();
// console.log([...first]); // [1, 2, 3]
// console.log([...second]); // [4, 5, 6]
// console.log([...list]); // [1, 2, 3, 4, 5, 6]

// const otherHalf = list.halve();
// console.log([...list]); // [1, 2, 3]
// console.log(list.length); // 3
// console.log([...otherHalf]); // [4, 5, 6]
// console.log(otherHalf.length); // 3

list.insertAfter(3, 3.5, 4.5);
console.log([...list]); // [1, 2, 3, 3.5, 4.5, 4, 5, 6, 7]
console.log(list.length); // 9

list.insertAtPosition(1, 2.25, 2.5, 2.75);
console.log([...list]); // [1, 2.25, 2.5, 2.75, 2, 3, 3.5, 4.5, 4, 5, 6, 7]
console.log(list.length); // 12
