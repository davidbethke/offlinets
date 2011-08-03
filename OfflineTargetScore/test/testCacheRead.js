TestCacheRead = TestCase('testCacheRead');

TestCacheRead.prototype.setUp= function(){
	cache = new Cache.Datastore();
	cache.setType('UserTarget');
	cache.setSize('128');
	cache.write('target','target1');

	
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
TestCacheRead.prototype.testCacheId= function(){
	assertEquals('1',cache.getId());
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
TestCacheRead.prototype.testCacheLength= function(){
	assertEquals('1Fail',cache.length());
};
