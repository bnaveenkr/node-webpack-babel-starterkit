import winston from 'winston';


const logger = winston.createLogger({
    transports: [
        new (winston.transports.Console)({
            level: 'debug',
        }),
        new (winston.transports.File)({
            name: 'debug-file',
            filename: 'app-debug.log',
            level: 'debug',
        }),
        new (winston.transports.File)({
            name: 'error-file',
            filename: 'app-error.log',
            level: 'error',
        }),
    ],
});

export default logger;
