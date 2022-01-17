import {
  Calculator,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  AddThenMultiplyCommand,
} from "./1_command_pattern.js";
//====================================================
import * as builderPattern from "./2_builder_pattern.js";
//====================================================
import a from "./singleton_pattern_a.js";
import b from "./singleton_pattern_b.js";
//====================================================
console.log("================================");
//===========================================
const calculator = new Calculator();
//calculator.executeCommand(new AddCommand(10));
//calculator.executeCommand(new MultiplyCommand(2));
calculator.executeCommand(new AddThenMultiplyCommand(10, 2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
//===========================================
console.log("================================");
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
//====================================================
console.log("================================");
//====================================================
console.log("================================");
//====================================================
a();
b();
