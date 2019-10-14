let assert=require('chai').assert;
let ui=require('../utility/util.js');
let k=new ui();


describe('test denomination',function(){
    it('lest test for 405',function(){
        
        //console.log("result--" + result);
        
        assert.equal(5,parseInt(k.denominator(405,7,0)));
    });
   
    it('test for wrng arguments',function(){
        //let result=k.denominator("forty two",7,0);
        //console.log("The argumnets must be integers" + result);
        
        assert.equal("The argumnets must be integers",k.denominator("forty",7,0));
    });
   
});