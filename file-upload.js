const express = require("express")
const path = require("path")
const multer = require("multer")
const app = express()
		
var storage=multer.diskStorage({
	destination:function(req,file,callBack){
		callBack(null,'./uploads');
	},
	filename:function(req,file,callBack){
		callBack(null,file.originalname);
	}
});
var upload=multer({storage,
	fileFilter: function (req, file, fileExtError){
		var filetypes = /jpeg|jpg|png/;
		var mimetype = filetypes.test(file.mimetype);

		var extname = filetypes.test(path.extname(
					file.originalname).toLowerCase());
		
		if (mimetype && extname) {
			return fileExtError(null, true);
		}
	
		fileExtError(filetypes);
	}
}).single('filename');

app.post('/',function(req,res){
	upload(req,res,function(error){
		if(error){
			res.end('Error Uploading file.');
		}else{
			res.end('File is uploaded successfully');
		}
	});
});

app.listen(7000,function() {
		console.log("Server Run Success")
})
