//LINKED LIST
console.log("=================================================");
console.log("LINKED LIST");

class LinkedList {
  constructor() {
    this.head = null;
    this.length - 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    //create a new node, gave the number we want to store , reference after this value is current start of list, this.head
    this.head = newNode;
    length++;
  }
}
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
module.exports = LinkedList;
