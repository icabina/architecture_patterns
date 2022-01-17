import FancyLogger from "./singleton_pattern_c.js";

const logger = new FancyLogger();

export default function a() {
  logger.printLogCount();
  logger.log("a File");
  logger.printLogCount();
}
