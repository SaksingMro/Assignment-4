var express=require('express');

app=express();

app.post('/',function(req,res){
	
	let firstName=req.query.firstName;
	let lastName=req.query.lastName;
	res.end(firstName+' '+lastName);
});

app.listen(7000,function(){
	console.log('Server Run Success');
});