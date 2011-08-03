TestNamespaceDecorator = TestCase("testNamespaceDecorator");

TestNamespaceDecorator.prototype.setUp = function(){
	baseTarget = new dbNameSpace.Target();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('capitalize');
	
};
TestNamespaceDecorator.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	delete baseTarget;
};

TestNamespaceDecorator.prototype.testNamespaceDecorator= function(){
	assertEquals('baseTarget2',baseTarget.getName());
	//assertEquals('1',baseTarget.getId());
	//baseTarget.nextId=1;
	
};
