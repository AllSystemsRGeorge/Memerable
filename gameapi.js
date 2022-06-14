// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com',
// 		'X-RapidAPI-Key': 'c63202fbe3msh67f1680d544bd8cp13bbfbjsn248658c29ac3'
// 	}
// };

// fetch('https://whatoplay.p.rapidapi.com/platform?platform=ps4&count=25', options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log(response);
//         const game = response.ps4.data[8].box_art;
// 		console.log(game)
// 		let gameContain = $(".container")
// 		console.log(gameContain)
		
// 		// let temp = document.createElement("div").innerHTML = game
// 	    // displayGames (response)
		
// 		let img = document.createElement("img") 
// 		img.src = game
// 		gameContain.append(img)
//     })
// 		.catch(err => console.error(err));

// // $("container").createElement

//  document.getElementsByClassName(".container").style.width="5px";


// //  function displayGames(information){
// // 	console.log(information)
// //  }



// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com',
//         'X-RapidAPI-Key': 'c63202fbe3msh67f1680d544bd8cp13bbfbjsn248658c29ac3'
//     }
// };
// fetch('https://whatoplay.p.rapidapi.com/platform?platform=ps4&count=25', options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//         const game = response.ps4.data[8].box_art;
//         console.log(game)
//         let gameContain = $(".container")
//         console.log(gameContain)
//         // let temp = document.createElement("div").innerHTML = game
// 		 displayGames (response)
//         let img = document.createElement("img")
//         img.src = game
//         gameContain.append(img)

		
// 		function displayGames(information){
// 		console.log(information)
// 		}

// 		function grab(){ 
// 			var arr= [box_art: "https://cdn2.whatoplay.com/boxart/reg/150x/thewitcher3wildhunt-ps4.webp"
// 			criticscore: 9.06
// 			developer: "CD Projekt RED"
// 			game_id: 1467
// 			game_name: "The Witcher 3: Wild Hunt"
// 			game_themes: "Action, Adventure, RPG, Open World, Single-player"
// 			game_url: "https://whatoplay.com/ps4/the-witcher-3-wild-hunt/"
// 			gamerscore: 9.63
// 			platform: "PS4"
// 			playscore: 9.35
// 			release_date: "2015-05-19"
// 			total_critic_count: 50
// 			total_gamer_count: 52472]:
				
// 			return arr
// 		}


//     })
//         .catch(err => console.error(err));


const option = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c63202fbe3msh67f1680d544bd8cp13bbfbjsn248658c29ac3',
		'X-RapidAPI-Host': '9gag-memes.p.rapidapi.com'
	}
};

fetch('https://9gag-memes.p.rapidapi.com/v1/fetch-memes?post_section=get%20this%20value%20from%20fetch-sections%20api%20response', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));