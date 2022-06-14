const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c63202fbe3msh67f1680d544bd8cp13bbfbjsn248658c29ac3',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};

fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));