var r=require('readline-sync');
var m=r.question("press to start \n");

function merge(m,l,mid,r)
{
var bc=0;
var arr= new Array();
for(var i;i<larger;i++)
{
    if(m[i]<n[i])
    for(var 
}

}

function mergesort(m,l,r)
{   
    var mid=(l+r)/2;
    if(l==r)
    return;
    
    mergesort(m,l,mid);
    mergesort(m,mid,r);
    merge(m,l,mid,r);




}