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