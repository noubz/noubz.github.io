window.addEventListener('scroll', () => {
	document.body.style.setProperty('--scroll',window.pageYOffset / (document.offsetHeight - window.innerHeight));
}, false);
