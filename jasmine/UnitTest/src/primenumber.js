
var numer=15;

var x=function(){

var i,count=0;
var j='';
for( i=1;i<=15;i++)
{ 
	if(numer%i==0)
	{ 

	 count=count+1;
	}	
}
if(count==2)
 {
	j='prime';
 }
else 
 {
	j='notprime';
 }
  
return  j;
 
};