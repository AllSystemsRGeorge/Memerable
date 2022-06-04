$(document).ready(function () {

	var genBtn = $('#Btn1')


	// Here is the video game API
	const videoGames = {
		"async": true,
		"crossDomain": true,
		"url": "https://steam-game-search-and-details.p.rapidapi.com/game_search/search_like/title/?search_value=New%20World",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Host": "steam-game-search-and-details.p.rapidapi.com",
			"X-RapidAPI-Key": "1afe68a172msh8503debc549170fp101692jsnf4985a19d633"
		}
	};

	$.ajax(videoGames).done(function (response) {
		console.log(response);
	});


	// Here is the Meme API
	const generateMemes = {
		"async": true,
		"crossDomain": true,
		"url": "https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
			"X-RapidAPI-Key": "1afe68a172msh8503debc549170fp101692jsnf4985a19d633"
		}
	};



	genBtn.click(function () {
		$.ajax(generateMemes).done(function (response) {
			console.log(response);
		});

	});

});

