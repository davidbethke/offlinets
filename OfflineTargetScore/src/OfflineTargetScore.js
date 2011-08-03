 var Target = Target || {};
  Target.Decorator={};

  Target.BaseTarget = function(){
	//private static
	var nextId =1;
	//constructor
	return function(){
		//private
		var id= nextId++;
		var name='none';
		//public (this instance only)
		
		this.getId = function(){return id;};
		this.getName = function(){return this.name;};
		this.setName = function(name){this.name=name;};
		this.getDecorator = function(deco){
							var child = Target.Decorator[deco];
							child.prototype=this;
							return new child;	
							};
	};
				
	
	//public static
	cls.getNextId = function (){
		return nextId;	
	};
	
	
}();

Target.Decorator.ScoringRing = function(){
	
	this.getName = function(){
		var name = Target.Decorator.ScoringRing.prototype.getName();
		return name+'ScoringRing';
	};
};
//})();
