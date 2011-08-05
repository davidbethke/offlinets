//copy of the js from the fileAttributesHtml.html file, try to test it out
// handle the file selected
// requires input type='file' for testing
	function handleFile(fileInput){
		//reference our section to display the attributes
		//var  fileAttributes=document.getElementById('fileAttributes');
		//verify the browser support the files interface
		if (fileInput.files) {
			//reference the file using the files interface
			var file = fileInput.files[0];
			//change it into 'functions'
			this.getName= function(){return file.name;};
			this.getType= function(){return file.type;};
			this.getSize=function(){return file.size;};
			/*
			//create the output
			var output = 'File attributes:<br>';
			output += 'name: ' + file.name + '<br>';
			output += 'type: ' + file.type + '<br>';
			output += 'size: ' + (file.size / 1024).toFixed(2) + 'KB<br>';
			output += 'last modified date: ' + file.lastModifiedDate;
			
			// set the output to the section
			fileAttributes.innerHTML = output;
			*/
		}
		else{
			/*
			//files interface not supported by browser
			fileAttributes.innerHTML='files interface not supported';
			*/
			return 'Unsupported file interface';
		}
		

			
		}