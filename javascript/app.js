$(document).ready( function() {
	
	$(".js-chave, .js-fechar").click( function() {
		$(".js-menu").toggle(".menu--exibindo");
		$(".js-fechar").toggle(".menu--exibindo");
		$(".js-chave").toggle(".js-fechar");
	});
	
	// Definindo o tamnanho do background igual ao tamanho da tela do usuário - o navegador de 60px
	var $height = window.innerHeight - 60;
	$("#pagina-principal").css('height', $height);
	
});

function initMap() {
		var salvador = {lat: -12.977145, lng: -38.445508};
		var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 15,
		    center: salvador
		});

		var marker = new google.maps.Marker({
			position: salvador,
			map: map
		});
	}