TestCacheRead = TestCase('testCacheRead');

TestCacheRead.prototype.setUp= function(){
	cache = new Cache.Datastore();
	cache.setType('UserTarget');
	cache.setSize('128');
	cache.read();
	
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
	assertEquals('ReadFail',cache.read());
};
TestCacheRead.prototype.testCacheWrite= function(){
	assertEquals('WriteFail',cache.write());
};
TestCacheRead.prototype.testCacheRemove= function(){
	assertEquals('RemoveFail',cache.remove());
};
TestCacheRead.prototype.testCacheFlush= function(){
	assertEquals('FlushFail',cache.flush());
};
TestCacheRead.prototype.testCacheUpdate= function(){
	assertEquals('UpdateFail',cache.update());
};