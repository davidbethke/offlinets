TestBulletHoles = TestCase("testBulletHoles");

TestBulletHoles.prototype.setUp = function(){
	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('BulletHoles');
	
};
TestBulletHoles.prototype.tearDown = function(){
	
	delete Target.baseTarget;
};

TestBulletHoles.prototype.testBulletHoles= function(){
	assertEquals('baseTarget1BulletHolesFail',baseTarget.getName());
	
	
};

