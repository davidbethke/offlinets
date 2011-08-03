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
					//BOZO should check instance of Target.Decorator
							var child = Target.Decorator[deco];
								child.prototype=this;
								child = new child;
							if( child instanceof Target.Decorator.BulletHoles || child instanceof Target.Decorator.Location || 
									child instanceof Target.Decorator.ScoringRing || child instanceof Target.Decorator.Shooter){
								//return new child;
								return child;
							}
							else{
								return null;
							}
							};
	};
				
	
	//public static
	cls.getNextId = function (){
		return nextId;	
	};
	
	
}();

//Decorators

Target.Decorator.ScoringRing = function(){
	
	this.getName = function(){
		var name = Target.Decorator.ScoringRing.prototype.getName();
		return name+'ScoringRing';
	};
};

Target.Decorator.BulletHoles = function(){
	
	this.getName = function(){
		var name = Target.Decorator.BulletHoles.prototype.getName();
		return name+'BulletHoles';
	};
};

Target.Decorator.Location = function(){
	
	this.getName = function(){
		var name = Target.Decorator.Location.prototype.getName();
		return name+'Location';
	};
};

Target.Decorator.Shooter = function(){
	
	this.getName = function(){
		var name = Target.Decorator.Shooter.prototype.getName();
		return name+'Shooter';
	};
};
//})();
