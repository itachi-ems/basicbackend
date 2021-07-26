const router = require('express').Router();
const multer = require('multer');
const {uploadFile}= require('../s3');


const storage = multer.memoryStorage({
    destination: (req,file,cb)=>{
        cb(null,'');
    }
});


const upload = multer({storage}).single('document');
router.post('/',upload, async(req,res)=>{
    try {

         const result = await uploadFile(req.file);
        

        res.json({"message":"FileUploaded"});
    }
    catch(err){
        res.json({"message":err});
    }
});
module.exports=router;