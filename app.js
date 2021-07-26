//inporting dotenv
require('dotenv').config();

const express =require('express');
const userRoute=require('./Routes/userRoutes');
swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
const logger= require('./logger');
const {sequelize} = require('./models');
const fileroutes = require('./Routes/FileRoutes');

const app=express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Log a message
app.use(function(req,res,next){
    logger.info('Method = ',req.method);
    next();
})





app.use('/api/user',userRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/file',fileroutes);


//creating http server
sequelize.sync().then(()=>{
    app.listen(3000,function(){
        console.log('server started successfully')
    })
})
