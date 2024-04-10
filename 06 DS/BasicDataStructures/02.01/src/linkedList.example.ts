import { LinkedList } from "./LinkedList.js";

const list = new LinkedList<number>();
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

list.insertAfter(3, 3.5, 4.5);
console.log([...list]); // [1, 2, 3, 3.5, 4.5, 4, 5, 6, 7]
console.log(list.length); // 9

list.insertAtPosition(1, 2.25, 2.5, 2.75);
console.log([...list]); // [1, 2.25, 2.5, 2.75, 2, 3, 3.5, 4.5, 4, 5, 6, 7]
console.log(list.length); // 12

const newList = list.filter((value) => value % 2 === 0);
console.log([...newList]); // [2, 4, 6]
console.log(newList.length); // 3
