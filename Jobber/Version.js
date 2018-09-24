// nextVersion("1.2.3.4");
// nextVersion("1.2.3");
// nextVersion("0.9.9");
// nextVersion("1.2.3.4.5.6.7.8");
// nextVersion("9.9");


function load_version() {
	document.getElementById("exercise").innerHTML = document.getElementById('version').innerHTML;
	document.getElementById("solution").innerHTML = "";
    document.getElementById("version_input").onkeyup = submit_version;
}

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

function submit_version() {
	document.getElementById("solution").innerHTML = "Next Version : " + nextVersion (document.getElementById('version_input').value);
}