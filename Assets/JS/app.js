$(document).foundation()

//empty var that will contain the list of games to be display 
var gameList;
var urlDislpay;
//Game api
const options = {
  method: 'GET',
  headers: {
      'X-RapidAPI-Host': 'whatoplay.p.rapidapi.com',
      'X-RapidAPI-Key': 'c63202fbe3msh67f1680d544bd8cp13bbfbjsn248658c29ac3'
  }
};
fetch('https://whatoplay.p.rapidapi.com/platform?platform=ps4&count=25', options)
  .then(response => response.json())
  .then(response => {
      //targeting the ps4 data object 
      gameList = response.ps4.data
      console.log(gameList);
      urlDislpay = response.ps4.data[0].box_art;
      console.log(urlDislpay);
  })
      .catch(err => console.error(err));

//function that displays the game img
let showGameImg = (boxArtUrl) => {
  let gameContainerImg = $(".imgGame");
  gameContainerImg.empty();
  let img = document.createElement("img");
  img.src = boxArtUrl;
  gameContainerImg.append(img);

} 

//on click function that will display the game img when click on a specific name of the game 
$("#game-list li").on("click", function(){
  let gameId = $(this).attr("game-id");
  
  

  let myGameSelected = gameList.find(x => x.game_id == gameId );

  localStorage.setItem("selectedGameName", myGameSelected.game_name)
  showGameImg(myGameSelected.box_art);
})


