var express = require("express");
var app= express();
var router=express.Router();//instead of app we use it here if we want

app.get("/",function(request,response){
	response.send({message:"hello bangalore!!"})

})

app.get("/user",function(request,response){
	var func=function(){
		return " janeesha"
	}
	response.send(func())

})
app.get("/customer",function(request,response){
	var customer={customer:"landt",location:"mysore",state:"karnataka"};
	response.send(customer)

})

var PORT=process.env.PORT||5000;//this says take PORT num from deployed server else by default 1337


app.listen(PORT,function(){
	console.log("server listing at PORT 1337 !!")
})