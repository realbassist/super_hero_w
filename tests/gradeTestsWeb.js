var book = require("../lib/grades").book;

exports["setUp"] = function (callback) {
	 book.reset();
	 callback();
}


exports["Can Compute letter grad of A"] = function(test){
	book.addGrade(100);
	book.addGrade(90);
	
	
	var result = book.getLetterGrade();
	
	test.equal(result,'A');
    test.done();
}

exports["can add new grad"] = function(test){
	book.addGrade(90);
	book.addGrade(95);
	var count = book.getCountOfGrades();
	
	test.equal(count,2);
    test.done();
}






