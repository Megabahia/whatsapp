import * as appRoot from "app-root-path";
import { format, LoggerOptions, createLogger } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const defaultLevel = process.env.LOG_LEVEL;

const processorOptions: LoggerOptions = {
  exitOnError: false,
  level: defaultLevel,
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new DailyRotateFile({
      filename: `${appRoot}/logs/%DATE%.log`,
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "100m",
      maxFiles: "30d"
    })
  ]
};

const processorLogger = createLogger();
processorLogger.configure(processorOptions);

export { processorLogger };
