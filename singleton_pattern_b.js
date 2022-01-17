import FancyLogger from "./singleton_pattern_c.js";
import loggerSingleton from "./singleton_pattern_c.js";
//const logger = new FancyLogger();

export default function b() {
  loggerSingleton.printLogCount();
  loggerSingleton.log("b File");
  loggerSingleton.printLogCount();
}
