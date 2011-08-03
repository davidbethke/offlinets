TestCacheRead = TestCase('testCacheRead');

TestCacheRead.prototype.setUp= function(){
	cache = new Cache.Datastore();
	cache.setType('UserTarget');
	cache.setSize('128');
	
};

TestCacheRead.prototype.tearDown= function(){
	delete cache;
	
};

TestCacheRead.prototype.testCacheType= function(){
	assertEquals('UserTargetFail', cache.getType());	
};

TestCacheRead.prototype.testCacheSize= function(){
	assertEquals('128Fail',cache.getSize());
};

TestCacheRead.prototype.testCacheRead= function(){
	assertEquals('Read',cache.read());
};