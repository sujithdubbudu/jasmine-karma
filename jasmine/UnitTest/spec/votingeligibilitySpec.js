describe('This custom matcher example ', function() { 
   
   beforeEach(function() { 
      // We should add custom matched in beforeEach() function. 
      
      jasmine.addMatchers({ 
         validateAge: function() { 
            return { 
               compare: function(actual,expected) { 
                 var result = {}; 
                 result.pass = (actual >= 18); 
                 result.message = 'sorry u r not eligible for voting ';  
                 return result; 
               }  
            };   
         }    
      });    
   });  
    
   it('Lets see whether u are teen or not', function() { 
      var myAge = 32; 
      expect(myAge).validateAge();  
   });
   
   it('Lets see whether u are teen or not ', function() {  
     
      var yourAge = 19;
	expect(yourAge).validateAge(); 
   }); 

});
