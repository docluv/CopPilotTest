//main entry point to wrapper around AWS nodejs SDK
//this is the only file that should be required by the client
//all other files are private to the wrapper

const AWS = require('aws-sdk'),
    s3 = require('./s3');


//set the region
AWS.config.update({region: 'us-east-1'});




module.exports = {
    s3: s3
};