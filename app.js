require('dotenv').config();
const express =require('express');
const userRoute=require('./Routes/userRoutes');

const app=express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api/user',userRoute);



//creating http server
app.listen(3000,function(){
    console.log('server started successfully')
})