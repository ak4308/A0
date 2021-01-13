function setup() {
	createCanvas(750,375); // make an HTML canvas element width x height pixels
}

function draw() {

	let canvas = color(255,250,240);
	background(canvas);
	textSize(32);

	let hourColor = color(230, 25, 2);
	let minColor = color(18, 43, 201);
	let secColor = color(255,215,0);

	let xHour = (22.5 * hour());
	let xMin = (3 * minute());

	// black grid
	stroke(30);
	fill(30);
		rect(180, 0, 30, 375);

	stroke(30);
	fill(30);
		rect(0, 165, 750, 30);

	stroke(30);
		fill(30);
			rect(660, 195, 30, 180);

	stroke(30);
		fill(30);
			rect(690, 270, 60, 30);

	// hours, minutes, seconds in primary colors

	stroke(hourColor);
  fill(hourColor);
    rect(210, 0, xHour, 164);

	stroke(minColor);
  fill(minColor);
    rect(0, 196, xMin, 179);

  stroke(secColor);
  fill(secColor);
    rect(690, 301, second(), 74);


}
