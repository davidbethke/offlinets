//namespace definition
var Cache = Cache || {};

Cache.Datastore = function(){
	//private static
	var nextId=1;
	
	return function(){
		//private instance
		var cacheId=nextId++;
		var cacheSize='unassigned';
		var cacheType='unassigned';
		//public (this instance only)
		this.getId= function(){ return cacheId;};
		this.getSize= function(){ return cacheSize;};
		this.getType= function(){return cacheType;};
		this.setSize= function(size){cacheSize=size;};
		this.setType= function(type){cacheType=type;};	
	};
	
}();

Cache.Datastore.prototype.read= function(){
	return "Read";
};
Cache.Datastore.prototype.write= function(){
	return "Write";
};
Cache.Datastore.prototype.remove = function(){
	return "Remove";		
};
Cache.Datastore.prototype.flush = function(){
	return "Flush";
};
Cache.Datastore.prototype.update = function(){
	return "Update";
};