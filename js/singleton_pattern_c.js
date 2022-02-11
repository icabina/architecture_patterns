/* export class FancyLogger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
} */

//===================================
//Only create one instance of class and export it
class FancyLoggerSingleton {
  constructor() {
    //we create a property of class
    if (FancyLoggerSingleton.instance == null) {
      this.logs = [];
      FancyLoggerSingleton.instance = this;
    }
    //second time we run program
    return FancyLoggerSingleton.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}
//New instance of FancyLoggerSingleton
const loggerSingleton = new FancyLoggerSingleton();
//Prevent Changes
Object.freeze(loggerSingleton);
export default loggerSingleton;
