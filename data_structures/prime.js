const utilFile=require('./utility/utility');
var util=new utilFile.Utility();
const dataStructObj=require("./dataStructures");
var twoDArrayObj=new dataStructObj.twodArray();

var twodArray=twoDArrayObj.makearray(10,26);
//console.log(twodArray);
var fin=util.getPrimeNumberInArray(100,twodArray);
console.log(fin);




