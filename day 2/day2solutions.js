//part 1
function checksum(input) {
	var sum = 0;
	var lines = input.split("|");
	for (i=0; i < lines.length; i++) {
		var array = lines[i].split("	");
		var max = array.reduce(function(a, b) {
    		return Math.max(a, b);
		});
		var min = array.reduce(function(a, b) {
    		return Math.min(a, b);
		});
		var diff = max - min;
		sum += diff;
	}
	return sum;
}

//part 2

function checksum2(input) {
	var sum = 0;
	var lines = input.split("|");
	for (i=0; i < lines.length; i++) {
		var array = lines[i].split("	");
		for (j=0; j < array.length; j++) {
			for (k=0; k < array.length; k++) {
				if (array[j] % array[k] == 0 & array[j] != array[k]) {
					sum += array[j] / array[k];
				}
			}
		}
	}
	return sum;
}