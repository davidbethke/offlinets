TestNamespaceDecoratorLocation = TestCase("testNamespaceDecoratorLocation");

TestNamespaceDecoratorLocation.prototype.setUp = function(){
	baseTarget = new dbNameSpace.Target();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('location');
	
};
TestNamespaceDecoratorLocation.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	delete baseTarget;
};

TestNamespaceDecoratorLocation.prototype.testNamespaceDecoratorLocation= function(){
	assertEquals('baseTarget2',baseTarget.getName());
	//assertEquals('1',baseTarget.getId());
	//baseTarget.nextId=1;
	
};
