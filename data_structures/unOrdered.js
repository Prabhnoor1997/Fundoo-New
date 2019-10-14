
const d=require('./dataStructures');
var linkedListObj= new d.LinkedList();
let r=require('readline-sync');
var word=r.question("which word you wanna delete or add  "); 
const utilFile=require('./utility/utility');
var util=new utilFile.Utility();
var spl=util.readFromfile('../unordertext.txt');
for(var i=0;i<spl.length;i++)
            var h=linkedListObj.add(spl[i]);
linkedListObj.printList();
if(linkedListObj.removeElement(word)==-1)
linkedListObj.add(word);
var str=linkedListObj.printList();
util.writeOnFile('../unordertext.txt',str);
