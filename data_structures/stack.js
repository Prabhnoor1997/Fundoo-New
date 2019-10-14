//for using dataStructures in datastructure file
const dataObj = require('./dataStructures')
//getting filereader from the fs packagef or reading text from file
const filereader = require('fs')
//creating an object of oredered link list
var stackObj = new dataObj.Stack();
//readline for getting human input
var file = filereader.readFileSync('../paranthesis.txt', 'utf-8');
console.log(file);
//console.group(file.length);


var unbal = 0;

for (var i = 0; i < file.length - 1; i++) {
    if (file[i] == '(') {
        //console.log("( found pushin it");
        stackObj.push('(');
        //console.log(stackObj.top);
    }

    if (file[i] == ')') {
        var popresult = stackObj.pop('(');
        // console.log("inside poping loop");
        if (popresult == false) {
            unbal = 1;
        }
    }
    // console.log(stackObj.top);
}

if (stackObj.isEmpty() && unbal == 0)
    console.log("Balanced paranthesis");
else
    console.log("Not so balanced paranthesis");
