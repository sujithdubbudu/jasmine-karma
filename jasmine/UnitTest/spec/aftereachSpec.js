   var currentVal = 0; 
afterEach(function(){ 
   currentVal = 5;  

});

xdescribe("Different Methods of Expect Block",function() { 




   it("first call ", function(){ 
      expect(currentVal).toEqual(5);     
   });     
   
   it("second call ",  function() { 
      expect(currentVal).toEqual(0);     
   });   

});