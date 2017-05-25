var EventEmiter=require("events").EventEmitter;
var emiter=new EventEmiter();

var importdata=require("./import.js")
console.log(importdata())//moduler patran

var org=[{name:"techera",location:"hydrabad",state:"telangana"},
         { name:"techminds",location:"bangalore",state:"karnataka"},
          {name:"landt",location:"mysore",state:"karnataka"}];

emiter.on("start reading",function(data){
	console.log("start reading the fiole")	
	emiter.emit("print_content",data)
	})

emiter.on("print_content",function(data){
	console.log(data)
	emiter.emit("done","sucesfully done reading the content")
})
emiter.on("error",function(message){
	console.log(message);
})
emiter.on("done",function(message){
	console.log(message);
})

emiter.emit("start reading",org);
