/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let randomOrder = []
let timeDown, timerInterval
let timeUp = 0
let mins = 0
let secs = 0

/*-------------------Cached Element References-------------------*/
let timer = document.querySelector("#timer")

let numberOfMoves = document.querySelector("#moves")

/*----------------------Event Listeners--------------------------*/
document.querySelector("#play-btn").addEventListener("click", playButton)

document.querySelector("#reset-btn").addEventListener("click", resetButton)

document.querySelectorAll(".number").forEach(square => {
  square.addEventListener("click", handleClick)
});

/*-------------------------Functions-----------------------------*/

init()
function init(){
  moves = moves.innerHTML = "Moves 000"
  // set level to easy by default
  // disable clicking on squares

  shuffleArray()

}


function shuffleArray() {
  let shArr = winNumberOrder
  for(i = 0; i < 15; i++){
    let randomIdx = Math.floor(Math.random() * shArr.length)
    let numberPicked = shArr.splice(randomIdx, 1)[0]
    randomOrder.push(numberPicked)

  }
  moveNull()
}

function moveNull() {
  randomOrder.push(randomOrder.splice(randomOrder.indexOf(null), 1)[0])
}

function playButton(){
  console.log("Clicked Play Button")
  if(timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  } else {
    startTime()
  }
  
  // button is activate when page is loaded
  // after player click on play timer starts and it disables
  // if player clicks on reset, button becomes active again
}

function resetButton(){
  
  console.log("Clicked Reset Button")
  // Reset button always active
  // if clicked, calls init() function
  // enables play button
  // disables clicking on board squares
  // 
}

function handleClick() {
  // target the square that was clicked
  // take the id#
  // store id# in variable
  // call findNull function
}

function findNull(){
  // looks inside of all arrays in array
  // finds X number that was clicked on
  // if X number has null within the same array with index -1 or + 1 (from X number) or
  // if X number has null in array above or under it with same index number then swap them and call render
  // if not return false
}

function render(){
  // takes numbers from an array of arrays and sets in new order on the board
  // converts to a single array and compares with win combination
  // if it matches, call player win function
}

function tick() {
  timeUp++
  renderTime()
  
  // starts at 0:00
  // stops at 5:00
  // starts after player clicks on Play button
  
}

function startTime(){
  timerInterval = setInterval(tick, 1000)
}

function renderTime(){
  mins = Math.floor(timeUp / 60)
  secs = timeUp % 60
  if (secs < 10){
    timer.innerHTML = `Time ${mins}:0${secs}`
  } else {
    timer.innerHTML = `Time ${mins}:${secs}`
  }
  console.log(document.getElementById("timer").innerHTML)
  console.log(timeUp)
  console.log(mins)
  console.log(secs)
}



function timerDown(){
  // if level set on hard
  // starts at 2:00
  // stops at 0:00
  // starts after player clicks on Play button
}

function countMoves() {
  // after clicked square moves to empty spot add +1 to moves counter
  // stop counting when timer is up
}

function gameOver(){
  if (mins === 5) {
    document.querySelector("h1").innerText = "Game over! Please click Restart"
  }
  // compares variables if timeUp = 5:00 disable clicks on game board
  // or if timeDown = 0:00 
  // then show message " You've lost. Please restart the game"
  // disable moves on a game board
}

function playerWin() {
  // if numbers in randomOrder array = to winNumberOrder
  // swow message "Congrats, you won!"
  // disable moves on a game board

}


