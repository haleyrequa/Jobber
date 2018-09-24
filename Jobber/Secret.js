// console.log(recover_secret(triplets) == "whatisup");


function load_secret() {
	document.getElementById("solution").innerHTML = "";
	document.getElementById("exercise").innerHTML = document.getElementById('secret').innerHTML;
	document.getElementById('secret_input').value = "[['t', 'u', 'p'],\n['t', 's', 'u'],\n['a', 't', 's'],\n['h', 'a', 'p'],\n['t', 'i', 's'],\n['w', 'h', 'i'],\n['w', 'h', 's']]"
	document.getElementById("secret_input").onkeyup = submit_secret;
	submit_secret();
}

function submit_secret() {
	document.getElementById("solution").innerHTML = recover_secret (document.getElementById('secret_input').value.replace(/\n/g, ''));
}

function recover_secret(input) {
	var secret = [],
	triplets,
	secretLength;

	try{
		triplets = eval(input)
		secretLength = new Set(triplets).size;
	
	
		for(var i = 0; i <= secretLength; i++){

			letter = null;

		 	for(var row = 0; row < triplets.length; row++) {
		 		if (letter == null ||
		 			letter == triplets[row][1] ||
		 			letter == triplets[row][2]) {

		 			if (!secret.includes(triplets[row][0])) {
		 				letter = triplets[row][0];
		 			} else if (!secret.includes(triplets[row][1])) {
		 				letter = triplets[row][1];
		 			} else if (!secret.includes(triplets[row][2])) {
		 				letter = triplets[row][2];
		 			}
		 		}
			}
			secret[i] = letter;
		}
	}
	catch (err) {
		return '';
	}
	return secret.join('');
}

function parse_string (input){
	var array = [];
	array = JSON.parse[input];

}