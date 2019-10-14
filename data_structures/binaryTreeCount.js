// object for input reading
let readlines=require('readline-sync');
// to get the input of number of nodes of binary tree
var num=readlines.question("Enter the number of nodes of the binary tree");
//for using utility in utility file
const utilFile=require('./utility/utility');
var util=new utilFile.Utility();
console.log("The number of trees that can be made are");
console.log(util.catalan(num));