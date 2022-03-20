const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",

];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute('id' ,'blocks');
    
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target );
}

// when the DOM loads
createDivsForColors(shuffledColors);

let card1
let card2
var div= document.querySelector('div');
var divs=document.querySelectorAll('#blocks');
div.addEventListener("click", matchcards);
function matchcards(e){
  console.log('click', e.target);
  clickcard = e.target;
  if(clickcard.id==="game"){
        return;
   }
   
  clickcard.style.backgroundColor=e.target.className;
  if (card1===undefined){
    card1=clickcard;
    card1.style.pointerEvents="none";
  
}else
{
  card2=clickcard;
  div.style.pointerEvents="none";
}
 
  
  if (card1!=undefined && card2!=undefined){
    div.style.pointerEvents="none";
    clickcard.style.pointerEvents="none";
    
    setTimeout(match, 1000);
    setTimeout(reset, 1100);
  }
}
function match(){
  div.style.pointerEvents="none";
  if(card1.className===card2.className){
  
    card2.style.pointerEvents="none";
    card1.style.pointerEvents="none";
   

    return;
  }else{
    if (card1.className!=card2.className){
      card1.style.pointerEvents="";
      card2.style.pointerEvents="";
      card1.style.backgroundColor="";
      card2.style.backgroundColor="";
    
  }
  }
    
  }

function reset(){
 
    div.style.pointerEvents="auto";
    card1=undefined;
    card2=undefined;
}
