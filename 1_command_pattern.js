"use strict";
//===========================================
console.log("COMMAND PATTERN");
//===========================================
export class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }
  undo() {
    const command = this.history.pop(); //removes last item from array and puts it in const command
    this.value = command.undo(this.value);
  }
}
//===========================================

export class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }
  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }
  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}
//===========================================

export class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }
  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }
  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}
//===========================================

export class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }
  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }
  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}
//===========================================

export class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }
  execute(currentValue) {
    return currentValue * this.valueToDivide;
  }
  undo(currentValue) {
    return currentValue / this.valueToDivide;
  }
}
//===========================================
export class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }
  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }
  undo(currentValue) {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}
