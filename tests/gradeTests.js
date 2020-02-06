var book = require("../lib/grades").book;

exports["setUp"] = function (callback) {
	 book.reset();
	 callback();
}


exports["can average grades"] = function(test){
	book.addGrade(100);
	book.addGrade(50);
	
	
	var average = book.getAverage();
	
	test.equal(average,75);
    test.done();
}

exports["can add new grad"] = function(test){
	book.addGrade(90);
	book.addGrade(95);
	var count = book.getCountOfGrades();
	
	test.equal(count,2);
    test.done();
}






