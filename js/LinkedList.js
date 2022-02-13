//LINKED LIST
console.log("=================================================");
console.log("LINKED LIST");

export class LinkedList {
  //componente padre
  constructor() {
    this.head = null; //begining of linkedList
    this.length = 0; // keep track of value
  }

  //METHODS
  //ADD ELEMENTS TO BEGINING, AT HEAD
  //WE NEED TO REPLACE HEAD WITH NEW,
  //THEN LINK TO OLD HEAD
  insertAtHead(data) {
    //create new componente child
    const newNode = new LinkedListNode(data, this.head);
    //create a new node,
    //pass data,
    //reference to previous head
    this.head = newNode;
    this.length++;
  }
  //======================
  getByIndex(index) {
    //Edge cases
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  //======================
  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(index);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }
  //======================
  removeHead() {
    this.head = this.head.next;
    this.length--;
  }
  //======================
  removeAtIndex(index) {
    if (index === 0) return this.removeHead(index);

    const prev = this.getByIndex(index - 1);
    if (prev == null) return null;

    prev.next = prev.next.next;
    this.length--;
  }
  //======================
  print() {
    let output = "";
    let current = this.head;
    while (current) {
      //while theres an element in array to loop through
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}
export class LinkedListNode {
  //componentes child
  constructor(value, next) {
    this.value = value; //value at that point in the array
    this.next = next; //value of next item, previously was head
  }
}

//HELPER FOR TESTING
//create Array.fromValues

LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    //insert in reverse because we insert at the head in LinkedLists
    ll.insertAtHead(values[i]); //from back to front
  }
  return ll; //return the linkedList
};
