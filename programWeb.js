var book = require("./lib/grades.js").book;
var express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send("Hello World");
});

app.get("/grade",function(req,res){
	//"1,2,3". split (",");
	var grades = req.query.grades.split(" ");
	for(var i = 0;i< grades.length;i+=1) {
		book.addGrade(parseInt(grades[i]));
	}
	var average = book.getAverage();
	
	var letter = book.getLetterGrade();
	
	res.send("Your Average "+ average + " Grade " + letter);
});


app.listen(3000);
console.log("Server Ready...");


//sample to run in browser : http://localhost:3000/grade?grades=80%2090%2060%2075%2085%2062




