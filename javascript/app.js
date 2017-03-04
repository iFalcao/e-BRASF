var alternador = document.querySelector('.js-chave');

alternador.onclick = function() {
	var menu = document.querySelector('.js-menu');
	menu.classList.toggle('menu--exibindo');
}

function initMap() {
	var salvador = {lat: -12.977145, lng: -38.446708};
	var map = new google.maps.Map(document.getElementById('map'), {
	    zoom: 15,
	    center: salvador
	});

	var marker = new google.maps.Marker({
		position: salvador,
		map: map
	});
}
		