
// console.log(calculator("Calc.new.one.plus.two"));
// console.log(calculator("Calc.new.five.minus.six"));
// console.log(calculator("Calc.new.seven.times.two"));
// console.log(calculator("Calc.new.nine.divided_by.three"));
// console.log(calculator("Calc.new.nine.divided_by.zero"));
// console.log(calculator("Calc.new.nine.divided_by"));

var numbers = {
	"zero" : 0,
	"one" : 1,
	"two" : 2,
	"three" : 3,
	"four" : 4,
	"five" : 5,
	"six" : 6,
	"seven" : 7,
	"eight" : 8,
	"nine" : 9
};

var impossible = [ //* Taken from quotes on the internet. *//
	"It is impossible to hold your breath for 20 years.",
	"It is impossible to do what's not possible.",
	"It is impossible to prove or disprove solipsism.",
	"It is impossible to walk on the sun.",
	"It is impossible to reach the end of the universe.",
	"It is impossible to run a 2 minute mile.",
	"It is impossible to create something permanent.",
	"There's no such thing as a 4 sided triangle.",
	"\"It's hard to learn to play the piano, if you don't have a piano.\" -Pippi Longstocking"
];

function load_kata() {
	document.getElementById("solution").innerHTML = "";
	document.getElementById("exercise").innerHTML = document.getElementById('kata').innerHTML;
    document.getElementById("kata_input").onkeyup = function(){
    	document.getElementById("solution").innerHTML = calculator (document.getElementById('kata_input').value.replace(/\n/g, ''));
    };
}

function input_kata(value) {
	if(value == '' || document.getElementById("kata_input").value == '') {
		document.getElementById("kata_input").value = 'Calc.new';
	} 
	if (value != '') {
		document.getElementById("kata_input").value += '.' + value;
	}
	document.getElementById("solution").innerHTML = calculator (document.getElementById('kata_input').value.replace(/\n/g, ''));
}

function calculator (input) {
	var array = input.split("."); 
	operation = array[3],
	a = numbers[array[2]],
	b = numbers[array[4]];
	if (array.length != 5 ||
		array[0] != "Calc" ||
		array[1] != "new" ||
		isNaN(a) ||
		isNaN(b)) 
		return "0";

	switch (operation) {
		case "plus" :
			return a + b;
			break;
		case "minus" :
			return a - b;
			break;
		case "times" :
			return a * b;
			break;
		case "divided_by" :
			if (b == 0) return impossible[Math.floor(Math.random() * impossible.length)];
			return a / b;
			break;
	}

}
