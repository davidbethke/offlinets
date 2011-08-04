/**
 * 
 */

function setLocalStorage(){
	localStorage.name='Dave';
	localStorage.address='8009 Fierro Cove';
	localStorage.occupation='Unemployed';
}

function checkLength(){
	return localStorage.length;
	
}

function readName(){
	return localStorage.name;
}
function readAddress(){
	return localStorage.address;
}
function readOccupation(){
	return localStorage.occupation;
}

var dblocalS= dblocalS || {};


dblocalS.storage= function(){
	this.setLocalStorage = function(){
							localStorage.dbName='Elsa';
							localStorage.dbAddress='300 Keystone Loop';
							localStorage.dbOccupation='NumeroUno';
							};
	this.checkLength = function(){
						return localStorage.length;
						};
	this.readName = function(){
					return localStorage.dbName;
					};
	this.readAddress = function(){
						return localStorage.dbAddress;
	};
	this.readOccupation = function(){
						return localStorage.dbOccupation;
	};
	
};