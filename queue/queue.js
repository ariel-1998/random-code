export class Queue {
  constructor() {
    const items = [];

    this.enqueue = (item) => {
      items.push(item);
    };

    this.dequeue = () => {
      return items.shift();
    };

    this.peek = () => {
      return items[0];
    };

    this.queueLength = () => {
      return items.length;
    };

    this.isEmpty = () => {
      return items.length === 0;
    };
  }
}

//function for private items Arr

export function QueueFn() {
  const items = [];

  this.enqueue = (item) => {
    items.push(item);
  };

  this.dequeue = () => {
    items.shift();
  };

  this.peek = () => {
    return items[0];
  };

  this.queueLength = () => {
    return items.length;
  };

  this.isEmpty = () => {
    return items.length === 0;
  };
}
