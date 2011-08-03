TestScoringRings = TestCase("testScoringRings");

TestScoringRings.prototype.setUp = function(){
	baseTargetSR = new Target.BaseTarget();
	baseTargetSR.setName('baseTarget');
	baseTargetSR = baseTargetSR.getDecorator('ScoringRing');
	
};
TestScoringRings.prototype.tearDown = function(){
	//BaseTarget.nextId=1;
	//delete baseTarget;
};

TestScoringRings.prototype.testScoringRings= function(){
	assertEquals('baseTargetScoringRings',baseTargetSR.getName());
};

