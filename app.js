require('dotenv').config();
const express =require('express');
const userRoute=require('./Routes/userRoutes');
swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const log4js = require('log4js');

const app=express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//logging
log4js.configure({
    appenders: { fileAppender: { type: 'file', filename: './logs/all.log' } },
    categories: { default: { appenders: ['fileAppender'], level: 'info' } }
});

// Create the logger
const logger = log4js.getLogger();

// Log a message
logger.info("hey");


app.use('/api/user',userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



//creating http server
app.listen(3000,function(){
    console.log('server started successfully')
})