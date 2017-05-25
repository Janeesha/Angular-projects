var string="hello im import";


var sample=function(name){
	return "this is a function call"+name;
}
var sample1=function(){
	return "this is a function call";
}
//module.exports=sample;

// module.exports={
// 	sample:sample,
// 	sample1:sample1
// }

// module.exports=function (){  //display is a function name
// 	return "this is my function"
// }
module.exports.display=function (){  //display is a function name
	return "this is my function"
}