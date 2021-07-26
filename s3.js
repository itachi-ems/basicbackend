require('dotenv').config();
const fs = require('fs');
const AWS = require('aws-sdk');



const s3 = new AWS.S3({
    accessKeyId:process.env.AWS_BUCKET_ACCESSKEY,
    secretAccessKey:process.env.AWS_BUCKET_SECRETKEY,
    region:"us-east-2",
});




module.exports.uploadFile = (file) => {




    const params = {
        Bucket:process.env.AWS_BUCKET_NAME,
        Key:file.originalname,
        Body:file.buffer
    };

    return s3.upload(params).promise();
    
   

   
}