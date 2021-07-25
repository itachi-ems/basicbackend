const router=require('express').Router();
const db=require ('../Database/db');
const sqs=require('../Sqs/sqs');

//creating post request
router.post('/',async function(req,res){
    const data=req.body;
    try {
        const result=await db.registerUser(data);
        sqs.sendMessage(data);
    res.json("OK");
    } catch (error) {
        console.log(error);
        res.json("error");
    }
    
    
})

module.exports=router;