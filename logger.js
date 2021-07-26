const log4js = require('log4js');

//logging
log4js.configure({
    appenders: { fileAppender: { type: 'file', filename: './logs/all.log' } },
    categories: { default: { appenders: ['fileAppender'], level: 'info' } }
});

// Create the logger
const logger = log4js.getLogger();



module.exports=logger;