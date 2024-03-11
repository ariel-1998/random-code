export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  static fromArrayValues(...values) {
    const list = new LinkedList();
    for (let i = values.length - 1; i >= 0; i--) {
      list.insertAtHead(values[i]);
    }
    return list;
  }
  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  print() {
    let output = "";
    let current = this.head;
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    return (output += null);
  }

  insertAtIndex(index, data) {
    if (index === 0) return this.insertAtHead(data);
    const prevNode = this.getByIndex(index - 1);
    if (!prevNode) return null;
    prevNode.next = new LinkedListNode(data, prevNode.next);
    this.length++;
  }

  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;
  }

  removeFromIndex(index) {
    if (index === 0) return this.removeHead();
    if (index < 0 || index >= this.length) return null;
    const prevNode = this.getByIndex(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
