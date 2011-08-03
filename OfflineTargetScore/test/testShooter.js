TestShooter = TestCase("testShooter");

TestShooter.prototype.setUp = function(){
	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('Shooter');
	
};
TestShooter.prototype.tearDown = function(){
	
	delete Target.baseTarget;
};

TestShooter.prototype.testShooter= function(){
	assertEquals('baseTarget1ShooterFail',baseTarget.getName());
	
	
};

