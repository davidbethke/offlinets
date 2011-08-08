TestExperiment = TestCase('testExperiment');

TestExperiment.prototype.setUp=function(){
	experiment= new Experiment();
	
};
TestExperiment.prototype.tearDown=function(){
	delete experiment;
};
TestExperiment.prototype.testSize=function(){
	assertEquals(5,experiment.getSize());
};
TestExperiment.prototype.testNoClosure = function(){
	experiment.noClosure();
	assertEquals('0Fail',experiment.getMyArr());
	
};

TestExperiment.prototype.testClosure = function(){
	experiment.closure();
	assertEquals('3Fail',experiment.getMyArr());
};

TestExperiment.prototype.testDoubleClosure = function(){
	experiment.doubleClosure();
	assertEquals('3fail',experiment.getMyArr());
};
TestExperiment.prototype.testArrLength=function(){
	assertEquals('5fail',experiment.getMyArrLen());
};