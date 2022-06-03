// Here is the video game API
const videoGames = {
	"async": true,
	"crossDomain": true,
	"url": "https://top-video-games-1995-2021.p.rapidapi.com/0",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Host": "top-video-games-1995-2021.p.rapidapi.com",
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

$.ajax(generateMemes).done(function (response) {
	console.log(response);
});