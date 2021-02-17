var scroll = function() {
	let img_height = document.getElementById("banner").offsetHeight;
	let nav = document.getElementById("navbar");

	if (window.pageYOffset <= img_height) {
		nav.style.top = (img_height - window.pageYOffset + 7) + "px";
	}
	else { nav.style.top = "7px"}
};
window.addEventListener('scroll', scroll);

var update = function() {
	scroll();
}
window.addEventListener('resize', update)