import { initializeSky, resizeSky, drawStars } from '/js/stars.js';

// setting up sky/stars

let canvas = document.getElementById('background');
initializeSky(canvas);

const resizeHandler = () => {
	console.debug("redrawing stars");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	resizeSky(canvas.width, canvas.height);
	drawStars();
};
window.addEventListener('resize', resizeHandler, false);
// initializing
resizeHandler();
