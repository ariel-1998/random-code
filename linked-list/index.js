import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.insertAtHead("first");
list.insertAtHead("second");
list.insertAtHead("third");
list.insertAtIndex(1, "new seconde");
const data = list.getByIndex(1);
console.log(list.length);
console.log(data.value);
const listFormArr = LinkedList.fromArrayValues(1, 2, 3, 4, 5, 6, 7);
listFormArr.insertAtIndex(1, 50);
const arrListData = listFormArr.getByIndex(1).value;
console.log(arrListData);
console.log(listFormArr.getByIndex(2).value);
console.log(listFormArr.length);
console.log(listFormArr.print());
listFormArr.removeHead();
console.log(listFormArr.print());
listFormArr.removeFromIndex(0);
console.log(listFormArr.print());
