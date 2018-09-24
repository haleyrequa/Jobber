test_all();

function test_all() {
	var triplets = [['t', 'u', 'p'],
		['t', 's', 'u'],
		['a', 't', 's'],
		['h', 'a', 'p'],
		['t', 'i', 's'],
		['w', 'h', 'i'],
		['w', 'h', 's']],

		matrix3 = create_NxN_Matrix(3),
		matrix4 = create_NxN_Matrix(4),
		matrix5 = create_NxN_Matrix(5);

	// Secret.js Testing	
	console.log(recover_secret(triplets) == "whatisup");


	// Version.hs Testing
	console.log(nextVersion("1.2.3") == "1.2.4");
	console.log(nextVersion("0.9.9") == "1.0.0");
	console.log(nextVersion("1") == "2");
	console.log(nextVersion("1.2.3.4.5.6.7.8") == "1.2.3.4.5.6.7.9");
	console.log(nextVersion("9.9") == "10.0");

	// Kata.js Testing
	console.log(calculator("Calc.new.one.plus.two") == 3);
	console.log(calculator("Calc.new.five.minus.six") == -1);
	console.log(calculator("Calc.new.seven.times.two") == 14);
	console.log(calculator("Calc.new.nine.divided_by.three") == 3);

	// Spiral.js Testing
	travel_in_spriral(matrix3, 3);
	travel_in_spriral(matrix4, 4);
	travel_in_spriral(matrix5, 5);
	console.log(matrix3 +  " == " + [[1,2,3],[8,9,4],[7,6,5]]);
	console.log(matrix4 +  " == " + [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);
	console.log(matrix5 +  " == " + [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]);
}