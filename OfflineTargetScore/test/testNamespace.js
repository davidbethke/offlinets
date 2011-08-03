TestNamespace = TestCase("testNamespace");

TestNamespace.prototype.setUp = function(){
	baseTarget = new dbNameSpace.Target();
	baseTarget.setName('baseTarget1');
};
TestNamespace.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	delete baseTarget;
};

TestNamespace.prototype.testNamespace= function(){
	assertEquals('baseTarget2',baseTarget.getName());
	//assertEquals('1',baseTarget.getId());
	//baseTarget.nextId=1;
	
};
