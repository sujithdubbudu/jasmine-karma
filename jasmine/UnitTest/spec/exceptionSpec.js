var throwMeAnError = function() {   
   throw new Error(); 
};  

describe("Different Methods of Expect Block", function() {  
   var exp = 25; 
   
   it ("Hey this will throw an Error ", function() { 
      expect(throwMeAnError).toThrow(); 
   }); 

});