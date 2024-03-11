export class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  static fromArrayValues(...values) {
    const list = new CircularLinkedList();
    for (let i = values.length; i > 0; i--) {
      list.insertAtHead(values[i - 1]);
    }
    return list;
  }
  insertAtHead(data) {
    const node = new CreateNode(data);
    if (!this.head) {
      node.next = node;
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.tail.next = node;
      this.head = node;
    }
    this.length++;
  }
  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    //if had prev i would have checked
    //if(index > this.length / 2) it means its closer to the end then it it to the start
    //then do reverse loop start from tail and loop with current.prev instead
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.insertAtHead(data);
    const prevNode = this.getByIndex(index - 1);
    const node = new CreateNode(data);
    node.next = prevNode.next;
    prevNode.next = node;
    if (index === this.length) {
      this.tail = node;
    }
    this.length++;
  }
  print() {
    if (!this.length) return null;
    let current = this.head; //1 //2 //3
    let output = "";
    do {
      output += `${current.value} -> `;
      current = current.next;
    } while (current !== this.head);

    return (output += "looping back to head");
  }
  removeHead() {
    if (!this.head) return null;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.length--;
  }

  removeFromIndex(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.removeHead();
    const prevNode = this.getByIndex(index - 1);
    prevNode.next = prevNode.next.next;
    if (index === this.length - 1) this.tail = prevNode;
    this.length--;
  }
}

class CreateNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
