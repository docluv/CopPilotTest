//unit test for ./s3 module

const s3 = require('./s3'),
    assert = require('assert');

//test listBuckets method
describe('listBuckets', () => {
    
    //test the happy path
    it('should return a list of buckets', async () => {
        
        //call the method
        const data = await s3.listBuckets();
        
        //assert that the data is an array
        assert(Array.isArray(data));
        
    });
    
});


