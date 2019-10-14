
//using filereader to get the string in text tile

//for using dataStructures in datastructure file
const dataObj=require('./dataStructures.js')
const utilFile=require('./utility/utility');
var util=new utilFile.Utility();
//creating an object of hash
var spl=util.readFromfile('../hash.txt');
var hashObj=util.addToHash(spl);
util.addOrRemoveHash(hashObj);
