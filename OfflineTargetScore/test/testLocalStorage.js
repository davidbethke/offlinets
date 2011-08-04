/**
 * 
 */
TestLocalStorage = TestCase('testLocalStorage');

TestLocalStorage.prototype.setUp = function(){
	setLocalStorage();
	ls= new dblocalS.storage();
	ls.setLocalStorage();
	
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
TestLocalStorage.prototype.testDbLocalS= function(){
	assertEquals('1Fail',ls.checkLength());
};
TestLocalStorage.prototype.testDbName= function(){
	assertEquals('1Fail',ls.readName());
};
TestLocalStorage.prototype.testDbAddress= function(){
	assertEquals('1Fail',ls.readAddress());
};
TestLocalStorage.prototype.testDbOccupation= function(){
	assertEquals('1Fail',ls.readOccupation());
};