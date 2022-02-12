/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let randomOrder = []
let timeUp, timeDown

/*-------------------Cached Element References-------------------*/
// let timer = document.querySelector("#timer")

// let numberOfMoves = document.querySelector("moves")

/*----------------------Event Listeners--------------------------*/
document.querySelector("#play-btn").addEventListener("click", () => console.log("Clicked Play Button"))

document.querySelector("#reset-btn").addEventListener("click", () => console.log("Clicked Reset Button"))

document.querySelectorAll(".number").forEach(square => {
  square.addEventListener("click", handleClick)
});

/*-------------------------Functions-----------------------------*/

init()
function init(){
  timer = timer.innerHTML = "Time 0:00"
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

function timerUp() {
  //if level set on easy
  // starts at 0:00
  // stops at 5:00
  // starts after player clicks on Play button
  
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


