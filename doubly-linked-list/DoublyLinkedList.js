export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  static fromArrayValues(...values) {
    const list = new DoublyLinkedList();
    for (let i = values.length; i > 0; i--) {
      list.insertAtHead(values[i - 1]);
    }
    return list;
  }
  insertAtHead(data) {
    const node = new DoublyLinkedListNode(data, this.head, null);
    if (this.head) this.head.prev = node;
    this.head = node;
    this.length++;
  }

  getByIndex(index) {
    if (index >= this.length || index < 0) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  print() {
    let current = this.head;
    let backwardsOptput = null;
    let forwardsOutput = "";
    while (current) {
      forwardsOutput += `${current.value} -> `;
      backwardsOptput += ` <- ${current.value}`;
      current = current.next;
    }
    return { forwards: forwardsOutput + null, backwards: backwardsOptput };
  }

  insertAtIndex(index, data) {
    if (index < 0 || index > this.length) return null;
    if (index === 0) return this.insertAtHead(data);
    const prevNode = this.getByIndex(index - 1);
    const node = new DoublyLinkedListNode(data, prevNode.next, prevNode);
    prevNode.next = node;
    if (node.next) node.next.prev = node;
    this.length++;
  }

  removeHead() {
    if (!this.head) return null;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.length--;
  }

  removeFromIndex(index) {
    if (index > this.length - 1 || index < 0) return null;
    if (index === 0) return this.removeHead();
    const prevNode = this.getByIndex(index - 1);
    prevNode.next = prevNode.next.next;
    // if i didnt remove the last item
    if (prevNode.next) prevNode.next.prev = prevNode;
    this.length--;
  }
}

class DoublyLinkedListNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
