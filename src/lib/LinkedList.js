export class LinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SingleLinkedList {
  constructor(value) {
    const node = new LinkedNode(value);
    this.head = node;
    this.tail = node;
  }
}

export class Cell {
  constructor(col, row) {
    this.row = row;
    this.col = col;
  }
}
