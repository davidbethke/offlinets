TestNamespaceDecoratorCapitalizeLocation = TestCase("testNamespaceDecoratorCapitalizeLocation");

TestNamespaceDecoratorCapitalizeLocation.prototype.setUp = function(){
	baseTarget = new dbNameSpace.Target();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('location');
	baseTarget= baseTarget.getDecorator('capitalize');
	
};
TestNamespaceDecoratorCapitalizeLocation.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	delete baseTarget;
};

TestNamespaceDecoratorCapitalizeLocation.prototype.testNamespaceDecoratorCapitalizeLocation= function(){
	assertEquals('baseTarget2',baseTarget.getName());
	//assertEquals('1',baseTarget.getId());
	//baseTarget.nextId=1;
	
};
