 //var fs = require('fs');
// var readableStream = fs.createReadStream('./sample.txt');
// var writableStream = fs.createWriteStream('./file2.txt');

// readableStream.pipe(writableStream);

// var fs=require("fs");
// var filepath="./sample.txt"
// var readable=fs.createReadStream(filepath,{encoding:"utf-8",highWaterMark:4*1024})

// readable.on("data",function(chunk){
// 	console.log(chunk.length)
// })

// var writeable=fs.createWriteStream("./output.txt");
// readable.on("data",function(chunk){
// 	console.log(chunk.length)
// 	writeable.write(chunk)
// 	writeable.end();//this specifies end of writing file
// 	writeable.write(chunk)//it will give error
// })


var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('./sample.txt');
var w = fs.createWriteStream('./mygzipfile.txt.gz');
r.pipe(gzip).pipe(w);