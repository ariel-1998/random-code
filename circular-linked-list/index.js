import { CircularLinkedList } from "./CircularLinkedList.js";
const list = new CircularLinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtIndex(3, 10);
console.log(list.getByIndex(0).value);
console.log(list.getByIndex(1).value);
console.log(list.getByIndex(2)?.value);
console.log(list.length);
console.log(list.print());

const ArrList = CircularLinkedList.fromArrayValues(1, 2, 3, 4, 5, 6, 7, 8, 9);
ArrList.removeHead();
console.log(ArrList.tail.next.value);
ArrList.insertAtIndex(9, 50);
console.log(ArrList.print());
console.log(ArrList.tail.next.value);

console.log(ArrList.removeFromIndex(9));
console.log(ArrList.tail.next.value);

console.log(ArrList.print());

const newList = new CircularLinkedList();
newList.insertAtHead(1);
newList.insertAtHead(2);
console.log(newList.head.value);
newList.removeHead();
console.log(newList.tail.value);
console.log(newList.head.value);
newList.removeFromIndex(0);
console.log(newList.tail);
console.log(newList.head);

const list2 = new CircularLinkedList();
list2.insertAtIndex(0, 5);
console.log(list2.head.value);
console.log(list2.head.next.value);
console.log(list2.tail.value);
console.log(list2.tail.next.value);
console.log("inserting");
list2.insertAtIndex(1, 10);
console.log(list2.head.value);
console.log(list2.head.next.value);
console.log(list2.tail.value);
console.log(list2.tail.next.value);
