const STARS_PER_PX = 0.00025;

let ctx: CanvasRenderingContext2D;
let width: number;
let height: number;

let stars: Star[];

class Star {
	x: number;
	y: number;
	size: number;

	constructor(w: number, h: number) {
		this.x = Math.random() * w;
		this.y = Math.random() * h;
		this.size = Math.random() ** 2 * 1.5;
	}

	draw() {
		if (this.x < width && this.y < height) {
			ctx.beginPath();
			ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, 2 * Math.PI);
			ctx.fill();
		}
	}
}

export function initializeStars(w: number, h: number) {
	console.debug('Initializing background scene');
	stars = [];
	let n_stars = Math.floor(w * h * STARS_PER_PX);
	console.debug(`Creating ${n_stars} stars`);
	for (let i = 0; i < n_stars; i++) {
		stars.push(new Star(w, h));
	}
}

export function drawStars(canvas: HTMLCanvasElement) {
	console.debug('redrawing stars');
	width = canvas.width;
	height = canvas.height;
	let new_ctx = canvas.getContext('2d');
	if (new_ctx == null) {
		console.error('Failed to get context from canvas');
		return;
	}
	ctx = new_ctx;

	ctx.fillStyle = 'white';
	for (let i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}
