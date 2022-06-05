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


//Alejandra header code begins here (page1)//
var liEl=document.querySelectorAll("li")
var i=0
setInterval(() => {
	// 0/9  =0
	//1/9=1
     //2/9=2

var remainOf= i++ % liEl.length
	//  9/9=0

liEl[remainOf].style.color="greenYellow"
console.log(remainOf,i)
if(remainOf===0 && i==10){
	for (let index = 0; index < liEl.length; index++) {
	    liEl[index].style.color= "rgb(33, 34, 31)";
		
	}
	i=0
}


}, 1000);

//Alejandra header code ends here (page1)//
