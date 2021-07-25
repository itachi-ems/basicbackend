const express =require('express');
const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});


module.exports.sendMessage = (user) => {
    var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
		var params = {
   			// Remove DelaySeconds parameter and value for FIFO queues
  			DelaySeconds: 10,
			//send user email in queue body
  			MessageBody: user.email,
  			// MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
  			// MessageGroupId: "Group1",  // Required for FIFO queues
  			QueueUrl:"https://sqs.us-east-2.amazonaws.com/656128728901/july22"
		};
		sqs.sendMessage(params, function(err, data)
		{
  			if (err)
			{
    				console.log("Error", err);
  			}
			else
			{
    				console.log("Data moved to Queue Successfully", data.MessageId);
  			}
		});
}
