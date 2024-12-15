import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info', // Set the minimum logging level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({ filename: 'error.log' }),
  ],
});
