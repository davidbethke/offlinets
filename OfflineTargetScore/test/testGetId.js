TestGetId = TestCase("testGetId");

TestBaseTarget.prototype.setUp = function(){

	baseTarget = new Target.BaseTarget();
	baseTarget.setName('baseTarget1');
	baseTarget2= new Target.BaseTarget();
	baseTarget2.setName('baseTarget2');
	baseTarget3= new Target.BaseTarget();
	baseTarget3.setName('baseTarget3');
};
TestBaseTarget.prototype.tearDown = function(){
	Target.BaseTarget.nextId=1;
};


TestBaseTarget.prototype.testGetId= function(){
	assertEquals('1',baseTarget.getId());
	assertEquals('2',baseTarget2.getId());
	assertEquals('3',baseTarget3.getId());

	
};
