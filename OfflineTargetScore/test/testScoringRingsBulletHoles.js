TestScoringRIngsBulletHoles = TestCase("testScoringRIngsBulletHoles");

TestScoringRIngsBulletHoles.prototype.setUp = function(){
	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
	baseTarget= baseTarget.getDecorator('ScoringRing');
	baseTarget= baseTarget.getDecorator('BulletHoles');
	
};
TestScoringRIngsBulletHoles.prototype.tearDown = function(){
	
	delete Target.baseTarget;
};

TestScoringRIngsBulletHoles.prototype.testScoringRIngsBulletHoles= function(){
	assertEquals('baseTarget1ScoringRingsBulletHolesFail',baseTarget.getName());
	
	
};

