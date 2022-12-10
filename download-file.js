var express=require('express');
app=express();

app.get('/',function(req,res){
	res.download('./application/cat.jpg');
})

app.listen(7000,function(){
	console.log('Server Run Success');
});