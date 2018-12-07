var addany=function(){
var i;
var sum=0;
 for(i=1;i<arguments.length;i++)
{ 
  sum=sum+arguments[i];
} 
return sum;
};

describe("sum of numbers",function(){
 
it("should check whether it is number",function(){
 expect(addany(10,9)).toEqual(jasmine.any(Number));
});
});