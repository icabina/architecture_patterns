import {
  Calculator,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  AddThenMultiplyCommand,
} from "./js/1_command_pattern.js";
import { LinkedList } from "./js/LinkedList.js";
//====================================================
import * as builderPattern from "./js/2_builder_pattern.js";
//====================================================
import a from "./js/singleton_pattern_a.js";
import b from "./js/singleton_pattern_b.js";
//====================================================
//
//
//
//
console.log("================================");
console.log("COMMAND PATTERN");
const calculator = new Calculator();
//calculator.executeCommand(new AddCommand(10));
//calculator.executeCommand(new MultiplyCommand(2));
calculator.executeCommand(new AddThenMultiplyCommand(10, 2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
//
//
//
//
console.log("================================");
console.log("BUILDER PATTERN");
const user1 = new builderPattern.User("Rellath");
console.log(user1);

const user2 = new builderPattern.User("Tatia");
console.log(
  user2,
  undefined,
  undefined,
  new builderPattern.Address("18", "street")
);

let user3 = new builderPattern.UserBuilder("Cata").setAge(30).build();
console.log(user3);

let usuario = new builderPattern.Usuario("Jorge", {
  age: 36,
  address: new builderPattern.Address("2", "main street"),
});
console.log(usuario);
//
//
//
//
//TEST
//====================================================
console.log("================================");
console.log("SINGLETON PATTERN");
a();
b();
//====================================================
//
//
//
//
//
//
//
//
console.log("================================");
//====================================================
console.log("LINKED LIST");
//https://www.youtube.com/watch?v=gJjPWA8wpQg&list=PLqvAK737mI8lLZpbbWZa6EvnatRn8tTce&index=6&t=587s

/* const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);
ll.insertAtHead(21);
ll.insertAtHead(25); */

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
// console.log(ll);
// console.log(ll.getByIndex(2).value); //30

ll.insertAtIndex(2, 60);
ll.print();
ll.removeHead();
ll.print();
ll.removeAtIndex(2);
ll.print();

console.log("================================");
