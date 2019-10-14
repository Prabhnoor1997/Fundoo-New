const assert=require('chai').assert;
const ui=require('../utility/util.js');
const s=new ui();

describe('Test for sqrt',function(){
    it('lets check for negative number',function(){
        assert.equal('Cant find squae root of a negative number',s.sqrt(-56));
    });
    
    it('lets check for perfect square',function(){
        assert.equal(8,s.sqrt(64));
    });

    
    

});