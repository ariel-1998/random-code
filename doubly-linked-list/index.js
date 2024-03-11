import { DoublyLinkedList } from "./DoublyLinkedList.js";

const list = new DoublyLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
console.log(list.getByIndex(2));

const arrList = DoublyLinkedList.fromArrayValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(arrList.length);
arrList.insertAtIndex(9, 50);

const { forwards, backwards } = arrList.print();
console.log("backwards", backwards);
console.log("forwards", forwards);
console.log(arrList.getByIndex(8).next.value);
console.log(arrList.head.next);
console.log(arrList.length);
arrList.removeFromIndex(1);
arrList.removeHead();
arrList.removeHead();
console.log(arrList.head);
console.log(arrList.length);
