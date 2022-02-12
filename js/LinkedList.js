//LINKED LIST
console.log("=================================================");
console.log("LINKED LIST");

export class LinkedList {
  //componente padre
  constructor() {
    this.head = null; //begining of linkedList
    this.length = 0; // keep track of value
  }

  //METHOD
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
}
export class LinkedListNode {
  //componentes child
  constructor(value, next) {
    this.value = value; //value at that point in the array
    this.next = next; //value of next item, previously was head
  }
}
