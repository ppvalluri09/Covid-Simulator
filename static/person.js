function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max))
}

class Person {
	constructor(w, h, r) {
		this.x = Math.floor(getRandomInt(w));
		this.y = Math.floor(getRandomInt(h));
		this.r = r;
		// this.range = Math.abs(Math.random())
		this.range = 0.5;
		if (Math.random() >= 0.99) {
			this.infected = true;
		} else {
			this.infected = false;
		}
	}

	update() {
		this.x = this.x + (2 * Math.random() - 1);
		this.y = this.y + (2 * Math.random() - 1);
	}

	show() {
		if (this.infected) {
			fill(255, 0, 0);
		} else {
			fill(0, 0, 255);
		}
		ellipse(this.x, this.y, this.r, this.r);
	}

	intersects(object) {
		var d = dist(this.x, this.y, object.x, object.y)
		if (d < this.r + object.r) {
			return true;
		}
	}
}