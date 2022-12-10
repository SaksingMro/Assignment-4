var express=require('express');

app=express();

app.post('/',function(req,res){
	let username=req.header('username');
	let password=req.header('password');
	res.send('Username:'+username+' '+'Password:'+password);
});

app.listen(7000,function(){
	console.log('Server Run Success');
});