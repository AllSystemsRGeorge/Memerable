
//Alejandra//
var btn1= document.querySelector('#Btn1')
var btn2= document.querySelector('#Btn2')
var btn3= document.querySelector('#Btn3')
var btn4= document.querySelector('#Btn4')
var loading= document.querySelector('#loading')

function startButton(){
	loading.classList.remove('hide')

	setTimeout(function(){
		loading.classList.add('hide')

	}, 3000)
}

btn1.addEventListener('click', startButton) 
btn2.addEventListener('click', startButton )
btn3.addEventListener('click', startButton)
btn4.addEventListener('click', startButton)
//alejandra spinner//


// Here is the video game API
/*const videoGames = {
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
});*/

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

	// Here is the Meme pic API
	const memePics = {
		"async": true,
		"crossDomain": true,
		"url": "https://ronreiter-meme-generator.p.rapidapi.com/images",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Host": "ronreiter-meme-generator.p.rapidapi.com",
			"X-RapidAPI-Key": "1afe68a172msh8503debc549170fp101692jsnf4985a19d633"
		}
	// Winning: [6, 603], [6, 648], [3, 390], [8, 820], [9, 912], [9, 929], [9, 985], [0, 57], [1, 176], [9, 963]

	// Rage Quit: [0,1], [0, 32], [0, 36], [0, 33], [1, 296], [1, 243], [6, 692], [9, 946], [0, 54], [1, 174]

	// Arrow: [6, 631], [3, 300], [3, 375], [7, 776], [7, 784], [7, 788], [8, 808], [8, 877], [9, 910], [1, 149]

	// Cake: is Lie [6, 655], [7, 707], [7, 792], [8, 835], [0, 65], [7, 704], [7, 710], [7,727], [7, 736], [1, 199]
	};

	
	$.ajax(memePics).done(function (response) {
		console.log(response);
	});



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

/*let btnBegin=document.; getElementbyId('')

btnBegin.addEventListener('click', () =>{
	window.history.back();
})*/

/*const aplication = document.querySelector(".container")

const url = 'url'

fetch(url)
.then(res => ) console.log(res)*/

