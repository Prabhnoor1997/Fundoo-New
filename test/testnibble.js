let assert=require('chai').assert;
let ui=require('../utility/util.js');
let k=new ui();

describe('Test for nibble swap function',function(){

    it('Lets test for 1010011',function(){
        assert.equal('00110101',k.nibble(83));
    });
    it('Lets test for 1111010011',function(){
        assert.equal('0011000000111101',k.nibble(979));
    });
    it('Lets test for wrong argument',function(){
        assert.equal('Input must be a number',k.nibble("forty two"));
    });
});