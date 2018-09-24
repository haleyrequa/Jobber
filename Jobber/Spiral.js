DirectionEnum = {
	LEFT : 0,
	RIGHT : 1,
	DOWN : 2,
	UP : 3
}


function load_spiral() {
	document.getElementById("exercise").innerHTML = document.getElementById('spiral').innerHTML;
	document.getElementById("solution").innerHTML = "";
    document.getElementById("spiral_input").onkeyup = submit_spiral;
    document.getElementById("spiral_input").onclick = submit_spiral;
}

function submit_spiral() {
	var n = document.getElementById('spiral_input').value,
	matrix = create_NxN_Matrix(n);
	travel_in_spriral(matrix, n);
	document.getElementById("solution").innerHTML = format_matrix(matrix);
	animate_spiral(n);
}

function travel_in_spriral(matrix, n) {
	var total = n * n;
	var count = 0;
	var y = 0;
	var x = -1;
	var xMax = n;
	var xMin = -1;
	var yMax = n;
	var yMin = 0;
	var direction = DirectionEnum.RIGHT;
	while (count < total) {
		switch(direction) {
			case DirectionEnum.RIGHT:
				x++;	
				if (x < xMax) {
					matrix[y][x] = count + 1;
					count++;
				} else {
					direction = DirectionEnum.DOWN;
					x--;
					xMax--;
				}
				break;
			case DirectionEnum.LEFT:
				x--;
				if (x > xMin) {
					matrix[y][x] = count + 1;
					count++;
				}
				else {
					direction = DirectionEnum.UP;
					x++;
					xMin++;
				}
				break;
			case DirectionEnum.UP:
				y--;
				if (y > yMin) {
					matrix[y][x] = count + 1;
					count++;
				}
				else {
					direction = DirectionEnum.RIGHT;
					y++;
					yMin++;
				}
				break;
			case DirectionEnum.DOWN:
				y++;
				if (y < yMax) {
					matrix[y][x] = count + 1;
					count++;
				}
				else {
					direction = DirectionEnum.LEFT;
					y--;
					yMax--;
				}
				break;
		}
	}
}


function create_NxN_Matrix(n) {
	var matrix = [];
	for (var y = 0; y < n; y++ ) {
		matrix[y] = new Array(n);
		for (var x = 0; x < n ; x++ ) {
			matrix[y][x] = 0;
		}
	}
	return matrix;
}

function format_matrix(matrix) {
	var html_matrix = "<table class=\"spiral\"><tbody>";

	matrix.forEach(function(row) {
		html_matrix += "<tr>";
		row.forEach(function(value) {
			html_matrix += "<td id=\"spiral_" + value +"\">" + value + "</td>";
		});
		html_matrix += "</tr>";
	});

	html_matrix += "</tbody></table>";
	return html_matrix;
}

function animate_spiral(n) {
	var size = n * n,
		timeEnter = 1000;
		timeColor = 2000;
		colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];


	for(var i = 1; i <= size; i++) {
		(function(i){
			setTimeout(function(){
				var element = document.getElementById("spiral_" + i);
				if (element != null) {
					element.style.color = colors[(i % 6)];
				}
				 
			}, timeEnter/size  * i);
			setTimeout(function(){
				var element = document.getElementById("spiral_" + i);
				if (element != null) {
					element.style.color = "black";
				}
				 
			}, timeColor/size * i);
		})(i);
	}
}
