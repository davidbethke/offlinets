TestBaseTarget = TestCase("testBaseTarget");

TestBaseTarget.prototype.setUp = function(){
	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
};
TestBaseTarget.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	//delete baseTarget;
};

TestBaseTarget.prototype.testBaseTarget= function(){
	assertEquals('baseTarget1',baseTarget.getName());
	//assertEquals('1',baseTarget.getId());
	//baseTarget.nextId=1;
	
};

