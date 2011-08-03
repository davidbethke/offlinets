/**
 * 
 */
var dbNameSpace= dbNameSpace || {};
dbNameSpace.Decorator={};
dbNameSpace.Target= function(){
	var nextId=1;
	return function(){
		var name='';
		var id=nextId++;
		this.setName= function(name){this.name=name;};
		this.getName= function(){ return this.name;};
		this.getId = function(){ return this.id;};
		this.getDecorator = function(deco){
				var child = dbNameSpace.Decorator[deco];
				child.prototype=this;
				return new child;
			
		};
		
	};
	
}();

dbNameSpace.Decorator.capitalize = function(){
		this.getName = function(){
		var name= dbNameSpace.Decorator.capitalize.prototype.getName();
		return name.toUpperCase();
		
	};
	
	
};

dbNameSpace.Decorator.location = function(){
	this.getName = function(){
	var name= dbNameSpace.Decorator.location.prototype.getName();
	return name+'location';
	
};


};
