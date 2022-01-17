import FancyLogger from "./singleton_pattern_c.js";

const logger = new FancyLogger();

export default function b() {
  logger.printLogCount();
  logger.log("b File");
  logger.printLogCount();
}
