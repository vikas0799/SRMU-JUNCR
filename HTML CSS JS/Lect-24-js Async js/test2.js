 asyncFunc1((result1) => { 
         asyncFunc2(result1, (result2) => { 
             asyncFunc3(result2, (result3) => { 
                 // Do something with result3 
             }); 
         }); 
     }); 