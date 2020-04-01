var w = 600;
var h = 600;
var population;
var start = false;

function create_population(count) {
	var pop = new Array(count);
	for (var i = 0; i < count; i++) {
		pop[i] = new Person(w, h, 10);
	}
	return pop
}

function setup() {
	canvas = createCanvas(w, h);
	canvas.parent('canvas');
	population = create_population(300);
	start = createButton('start');
	start.parent('buttons')
	// var slider = create
}

function draw() {
	background(0);
	if (start) {
		for (var i = 0; i < population.length; i++) {
			population[i].show();
			population[i].update();
			for (var j = i + 1; j < population.length; j++) {
				if (i != j && population[i].intersects(population[j])) {
					if (population[i].infected && !population[j].infected) {
						population[j].infected = true;
					} else if (!population[i].infected && population[j].infected) {
						population[i].infected = true;
					}
				}
			}
		}
	}
}
