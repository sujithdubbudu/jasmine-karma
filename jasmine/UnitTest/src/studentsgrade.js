
var avg=50;
var grade=function(){
 
 
 var g='';
if(avg>75)
 {
   g='very good';
 }
else if(avg<75 && avg>=55)
{
 g='good';
}
else
{ 
 g='poor';
}
return g;
};