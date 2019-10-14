const dataStructObj = require('./dataStructures');
var queueObj = new dataStructObj.Queue();
let readlines=require('readline-sync');

var bankQueue=[654,654,-987,657,-987,1001,-867 ,11 ];
bankQueue.push(12);
console.log(bankQueue);
var more='y';
for(var i=0;i<bankQueue.length;i++){
    queueObj.enqueue(bankQueue[i]);   
}
var reader;
while(1)
{
    reader=readlines.question("press y if you wanna add someone to the queue----")
    try{
        if(typeof(reader)==Number)
            throw"Please press y or any other alpha";
    }
    catch(err)
    {
        log.console(err);
        continue;
    }
    if(reader=='y'){
        var newMember=readlines.question("amount in negative if it is  withdraw and positive if its a deposit----");
        queueObj.enqueue(parseInt(newMember));
    }
    else
    break;
}
var sum=0;
var processingAmount;
while(queueObj.size!=0)
{
    processingAmount=queueObj.dequeue();
    sum=sum+processingAmount;
    console.log("new addition " + processingAmount + "  Bank Balance ==  " + (sum));
}

console.log(sum);