# Building the Intuition

1. Select the itemBox
2. create 3 event listeners on the item `mousedown`, `mouseleave`, `mouseup` & `mousemove`.
3. Add class active in mousedown and remove in others.
4. Add the 3 variables isDown, startX & scrollLeft
	- isDown as bool for true on mousedown and false on else
	- startX to store the x coord of variable before drag
	- scrollleft to calculate the left scrolling of itembox.
5. `startX = pageX Coord of event - offsetLeft of the container element`
6. Initialize the scrollLeft value for the itembox
7. check for isDown in the mousemove
	- prevent default for the event
	- set the scrollx when mousemove
		`(e.pageX - startX - itemBox.offsetLeft)*2`
	- set the scrollLeft of itembox to (initial value of scrollLeft) - (scrollx for mousemove)