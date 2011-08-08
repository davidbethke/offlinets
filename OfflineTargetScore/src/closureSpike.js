/**
 * 
 */
var Experiment= function(){
	var size=5;
	var myArr= new Array();
	this.getSize=function(){
		return size;
	};
	this.getMyArr=function(){
		return myArr[3];
	};
	this.getMyArrLen=function(){
		return myArr.length;
	};
	this.noClosure=function(){
			for(var i=0;i<size;i++){
				var value=function()
					{
					return myArr[i]=i;
					};
			}
	};
	this.closure= function(){
			for(var i=0;i<size;i++){
				var value=function()
					{
					return myArr[i]=i;
					}();
			}
			
	};
	this.doubleClosure= function(){
			for(var i=0;i<size;i++){
				var value=(function(aI)
					{
					return function(){
						 myArr[aI]=aI;
					}();
					
					}(i));
			}
		
	};
};