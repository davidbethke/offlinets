TestLocation = TestCase("testLocation");

TestLocation.prototype.setUp = function(){
	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('Location');
	
};
TestLocation.prototype.tearDown = function(){
	
	delete Target.baseTarget;
};

TestLocation.prototype.testLocation= function(){
	assertEquals('baseTarget1LocationFail',baseTarget.getName());
	
	
};

