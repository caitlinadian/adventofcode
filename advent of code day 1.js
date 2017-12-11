function solveCaptcha(input) {
	var sum = 0;
	for (i=0; i < input.length; i++) {
    i == input.length - 1 && input[i] == input[0] ? sum += parseInt(input[i]) :
    input[i] == input[i + 1] ? sum += parseInt(input[i]) :
    sum += 0;
  }
  return sum;
}