// Alle Listen
const nav_items = document.getElementsByClassName("navitem");
const sections = document.getElementsByTagName("section");

// Navbar-Scroll aktualisierung
function scroll() {
	// Navbar verschiebung
	let img_height = document.getElementById("banner").offsetHeight;
	let nav = document.getElementById("navbar");

	if (window.pageYOffset <= img_height) {
		nav.style.top = (img_height - window.pageYOffset) + "px";
	}
	else { nav.style.top = "7px"}

	// Sektion detection
	for (var section of sections) {
		if (section.getBoundingClientRect().top < (window.innerHeight / 2) ) {
			for (var item of nav_items) {
				if (item.href.includes(section.id)) { item.classList.add('active'); }
				else { item.classList.remove('active'); }
			}
		}
	}
};
window.addEventListener('scroll', scroll);

function update() {
	scroll();
}
window.addEventListener('resize', update)