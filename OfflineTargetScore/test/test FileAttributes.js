/* try to test file attributes api */
TestFileAttributes = TestCase('testFileAttributes');

TestFileAttributes.prototype.setUp = function(){
	//build an input tag'
	div=document.createElement('div');
	div.setAttribute('id', 'div');
	text=document.createTextNode('dave');
	div.appendChild(text);
	document.body.appendChild(div);
	
	section=document.createElement('section');
	input=document.createElement('input');
	input.setAttribute('type', 'file');
	input.setAttribute('id', 'input');
	input.setAttribute('onchange', 'handleFile(this)');
	section.appendChild(input);
	document.body.appendChild(section);
	
	//fill it w/ a file selection
	file= document.getElementById('input');
	fileInput.files[0]='jsclass.html';
	fileAttributes = new handleFile(document.getElementById('input'));

	//file.value='jsclass';
	//file.value='\/Users\/davidbethke\/Download\/jsclass.html';
	/*

	/*
	//document.getElementById('input').click();
	*/
	
	
};

TestFileAttributes.prototype.tearDown= function(){
	//tear  it down
	
};
//test to see if the form get's constructed correctly
TestFileAttributes.prototype.testInput = function(){
	assertEquals('dave',document.getElementById('div').firstChild.data	);
	
};
TestFileAttributes.prototype.testInput2 = function(){
	assertEquals('handleFile(this)',document.getElementById('input').getAttribute('onchange'));
};
TestFileAttributes.prototype.testInput3 = function(){
	assertEquals('handleFile(this)',document.getElementById('input').getAttribute('onchange'));
};
TestFileAttributes.prototype.testInput4 = function(){
	assertEquals('handleFile(this)',document.getElementById('input').value);
};

TestFileAttributes.prototype.testName= function(){
	assertEquals('log.txt',fileAttributes.getName());
};


TestFileAttributes.prototype.testType= function(){
	assertEquals('log.txt',fileAttributes.getType());
};

TestFileAttributes.prototype.testSize= function(){
	assertEquals('log.txt',fileAttributes.getSize());
};
