import winston, { format } from 'winston';
const { combine, timestamp, json } = format;

const logger = winston.createLogger({
    level: "info",
    format: combine(
        timestamp(),
        json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({filename:'error.log', }),
        new winston.transports.File({filename:'error.log', })
    ]
})

logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

export const buildLogger = (service: string) => { 
    return {
      log: (message: string) => {
        logger.log("info", message, service);
      },
      error: (message: string) => {
        logger.log("error", {message, service});
      },
    };
}