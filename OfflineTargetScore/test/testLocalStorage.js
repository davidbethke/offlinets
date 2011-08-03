/**
 * 
 */
TestLocalStorage = TestCase('testLocalStorage');

TestLocalStorage.prototype.setUp = function(){
	setLocalStorage();
	
};

TestLocalStorage.prototype.testRead = function(){
	assertEquals('Dave', readName());
};

TestLocalStorage.prototype.testAddress= function() {
	assertEquals('8009 Fierro Cove', readAddress());
};
TestLocalStorage.prototype.testOccupation= function(){
	assertEquals('UnemployedFail',readOccupation());
};
