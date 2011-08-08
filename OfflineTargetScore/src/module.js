var MODULE = (function () { 
    var my = {}, 
        privateVariable = 1; 
     
    function privateMethod() { 
        // ... 
    } 
     
    my.moduleProperty = 1; 
    my.add22 = function () { 
       return 2+2;
    }; 
     
    return my; 
}());