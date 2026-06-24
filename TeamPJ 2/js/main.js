document.addEventListener('DOMContentLoaded', () => {
	const heroBanner = document.getElementById('heroBanner');
	const heroKicker = document.getElementById('heroKicker');
	const heroTitle = document.getElementById('heroTitle');

	if (!heroBanner || !heroKicker || !heroTitle) {
		return;
	}

	const destinations = [
		{
			kicker: '강원특별자치도',
			title: '정선군',
			image: '../img/jungseon.jpg'
		},
		{
			kicker: '전북특별자치도',
			title: '무주군',
			image: '../img/muju.png'
		},
		{
			kicker: '충청북도',
			title: '단양군',
			image: '../img/danyang.jpeg'
		}
	];

	const randomIndex = Math.floor(Math.random() * destinations.length);
	const selected = destinations[randomIndex];

	heroBanner.style.backgroundImage = `url('${selected.image}')`;
	heroKicker.textContent = selected.kicker;
	heroTitle.textContent = selected.title;
});
