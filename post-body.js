var express=require('express');
var bodyParser=require('body-parser');
app=express();
app.use(bodyParser.json());

app.post('/',function(req,res){
	let JSONDATA=req.body;
	let JSONString=JSON.stringify(JSONDATA);
	res.send(JSONDATA);
	//Get the Specific Data
	/*let name=JSONDATA['name']
	let city=JSONDATA['city']
	res.send(name+' '+city); */
});
app.listen(7000,function(){
	console.log('Server Run Success');
});