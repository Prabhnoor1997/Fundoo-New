//getting filereader from the fs packagef or reading text from file
const filereader = require('fs') 
//for using dataStructures in datastructure file
const dataObj=require('./dataStructures')
//creating an object of oredered link list
var linkedListObj= new dataObj.OrderedLinkedList();
//readline for getting human input
let readlines=require('readline-sync');
//using filereader to get the string in text tile
var file=filereader.readFileSync('../unordertext.txt', 'utf-8');
//splitting the string on every space
var spl=file.split(" ");
//adding one by one the elements into oredered link list
for(var i=0;i<spl.length-1;i++)
    {   
       linkedListObj.add((parseInt(spl[i])));
    }
linkedListObj.printList();
//taking input to delete or insert
var element=readlines.question('Input the number you want to add or delete----');
//if found the elemnt then delete it else add it
if(linkedListObj.removeElement(element)==-1)
    linkedListObj.add(element);
//final ordered link list
linkedListObj.printList();
