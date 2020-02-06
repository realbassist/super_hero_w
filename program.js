var book = require("./lib/grades").book;

//why var i = 2 ?
//because if u run> node    program.js 80      90      30 ==> node is consider as an array
//                  Arr[0]  Arr[1]     Arr[2]  Arr[3]  Arr[4]
for (var i = 2; i< process.argv.length ; i+= 1){
	 book.addGrade(parseInt(process.argv[i]));
}


console.log(book.getAverage());





