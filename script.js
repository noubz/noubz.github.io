// Alle Listen
const nav_items = document.getElementsByClassName("navitem");
const sections = document.getElementsByTagName("section");

// Navbar-Scroll aktualisierung
function scroll() {
	// Navbar verschiebung
	let nav = document.getElementById("navbar");
	let img_height = document.getElementById("banner").offsetHeight;

	if (window.pageYOffset <= img_height) {
		nav.style.top = (img_height - window.pageYOffset) + "px";
		document.getElementById("arrowUp").style.opacity = 0;
	}
	else { 
		nav.style.top = "7px"; 
		document.getElementById("arrowUp").style.opacity = 1;
	}

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

window.addEventListener('resize', function () { scroll(); });