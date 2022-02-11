import FancyLogger from "./singleton_pattern_c.js";
import loggerSingleton from "./singleton_pattern_c.js";
//const logger = new FancyLogger();

export default function a() {
  loggerSingleton.printLogCount();
  loggerSingleton.log("a File");
  loggerSingleton.printLogCount();
}
