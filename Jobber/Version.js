/** Version.js creates the next version number.*/


/**Inital page loading*/
function load_version() {
	document.getElementById("exercise").innerHTML = document.getElementById('version').innerHTML;
	document.getElementById("solution").innerHTML = "";
    document.getElementById("version_input").onkeyup = submit_version;
}

/**Incremements the last digit of the previous version.*/
function nextVersion(version) {
	var array = version.split(".").map(Number);
	for(var i = array.length - 1; i > -1; i--) {
		if(array[i] == 9 && i != 0) {
			array[i] = 0;
		} else {
			array[i]++;
			break;
		}
	}
	return array.toString().replace(/,/g , ".");
}

/**Called when input changes to update the solution.*/
function submit_version() {
	document.getElementById("solution").innerHTML = "Next Version : " + nextVersion (document.getElementById('version_input').value);
}