let itemBox = document.querySelector('.items');
let isDown = false;
let startX; // for cursor pos before drag
let scrollLeft; 


itemBox.addEventListener('mousedown', (e) => {
	itemBox.classList.add("active");
	isDown = true;

	// x coord of cursor rel to itembox
	startX = e.pageX - itemBox.offsetLeft;

	// set the initial value of scrollLeft so it doesn't 
	// start always from the beginnning
	scrollLeft = itemBox.scrollLeft;
})

itemBox.addEventListener('mouseleave', () => {
	itemBox.classList.remove("active");
	isDown = false;
})

itemBox.addEventListener('mouseup', () => {
	itemBox.classList.remove("active");
	isDown = false;
})

itemBox.addEventListener('mousemove', (e) => {
	if(!isDown) return;

	e.preventDefault();
	let scrollx = (e.pageX - startX - itemBox.offsetLeft)*2;
	itemBox.scrollLeft = scrollLeft - scrollx;
})