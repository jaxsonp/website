// Stars per million pixels
const STARS_PER_MIL_PIX = 275;
const STARS_PER_PX = STARS_PER_MIL_PIX / 1_000_000;

const MAX_STAR_SIZE = 1.75;

let ctx = null;
let width;
let height;
let maxWidth = 0;
let maxHeight = 0;
let stars;

class Star {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.size = Math.random() ** 2 * MAX_STAR_SIZE;
	}
}

export function initializeSky(canvas) {
	stars = [];
	width = 0;
	height = 0;

	ctx = canvas.getContext('2d');
}

export function resizeSky(w, h) {
	// generates stars in a rectangle
	function generateStars(x, y, w, h) {
		for (let px_y = y; px_y < y + h; px_y++) {
			for (let px_x = x; px_x < x + w; px_x++) {
				if (Math.random() < STARS_PER_PX) {
					stars.push(new Star(px_x, px_y));
				}
			}
		}
	}

	if (w > maxWidth) {
		generateStars(maxWidth, 0, w - maxWidth, height);
		maxWidth = w;
	}
	width = w;

	if (h > maxHeight) {
		generateStars(0, maxHeight, width, h - maxHeight);
		maxHeight = h;
	}
	height = h;
}

export function drawStars() {
	if (ctx == null) {
		return;
	}

	ctx.fillStyle = 'white';
	for (let i = 0; i < stars.length; i++) {
		if (stars[i].x < width && stars[i].y < height) {
			ctx.beginPath();
			ctx.ellipse(stars[i].x, stars[i].y, stars[i].size, stars[i].size, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
	}
}
