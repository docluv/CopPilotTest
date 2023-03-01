const AWS = require('aws-sdk');


//async method to return list of buckets
async function listBuckets() {

    //create s3 service object
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});

    //call S3 to retrieve the list of buckets   
    const data = await s3.listBuckets().promise();

    //return the list of buckets
    return data.Buckets;

}

//async method to return a list of objects in a bucket
async function listObjects(bucketName) {

    //create s3 service object
    const s3 = new AWS.S3({apiVersion: '2006-03-01'});

    //call S3 to retrieve the list of objects in the bucket
    const data = await s3.listObjects({Bucket: bucketName}).promise();

    //return the list of objects
    //return data.Contents;

    //filter the list of objects to only return the key and size
    const filteredData = data.Contents.map((item) => {
        return {
            key: item.Key,
            size: item.Size
        };
    });

    //return the filtered list of objects
    return filteredData;

}




module.exports = {
    listBuckets: listBuckets,
    listObjects: listObjects
};