const linksBtn = document.querySelectorAll(".nav__link");


linksBtn.forEach(function(item) {
	item.addEventListener("click", function() {
		let currentBtn = item; 

		linksBtn.forEach(function(item) {
			item.classList.remove('active')
		});

		currentBtn.classList.add('active');
	});
});