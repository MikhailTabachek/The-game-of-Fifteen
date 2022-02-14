/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let randomOrder = []
let timeDown, timerInterval, squareIdxClicked, movesCount
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
// console.log(randomOrder)
init()
function init(){
  timeUp = 0
  movesCount = 0
  timer.innerHTML = `Time ${mins}:0${secs}`
  document.querySelector("#play-btn").disabled = false
  if(timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  } 
  moves.innerHTML = `Moves 00${movesCount}`

  // set level to easy by default
  // disable clicking on squares

  console.log(randomOrder)
  shuffleArray()
}


function shuffleArray() {
  let shArr = winNumberOrder
  // console.log(shArr)
  for(i = 0; i < 16; i++){
    let randomIdx = Math.floor(Math.random() * shArr.length)
    let numberPicked = shArr.splice(randomIdx, 1)[0]
    randomOrder.push(numberPicked)
  }
  moveNull()
}

function moveNull() {
  randomOrder.push(randomOrder.splice(randomOrder.indexOf(null), 1)[0])
  arrayNumToSq()
}

function arrayNumToSq() {
  for(i = 0; i < randomOrder.length; i++) {
    let sqrTxt = `sqr${i}`
      document.getElementById(sqrTxt).innerHTML = randomOrder[i]
    }
  }
console.log(randomOrder)

function playButton(){
  console.log("Clicked Play Button")
  startStopTime()
  document.querySelector("#play-btn").disabled = true
  
  // call function to activate clicks on board
  // //button is activate when page is loaded
  //// after player click on play timer starts and it disables
  // //if player clicks on reset, button becomes active again
}

function resetButton(){
  console.log("Clicked Reset Button")
  clearInterval(timerInterval)
  secs = 0
  mins = 0
  // timerInterval = null
  clearArr(randomOrder)
  init()
  console.log(randomOrder.length)
  
  //// Reset button always active
  //// if clicked, calls init() function
  // disables clicking on board squares
}

function clearArr(){
  arr.splice(0, 16)
}

console.log(randomOrder.length)

function handleClick(sqId) {
  let square = sqId.target.id
  square = parseInt(square.substr(square.indexOf("r") + 1))
  squareIdxClicked = square
  console.log(squareIdxClicked)
  findNull()
  }

  // //target the square that was clicked
  // //take the id#
  // //store id# in variable
  // call findNull function

  

function findNull(){
  currentArrState = randomOrder
  const toSwap = squareIdxClicked
  // numInSquare = currentArrState[squareIdxClicked]
  if(randomOrder[squareIdxClicked - 1] === null) {
    currentArrState[squareIdxClicked - 1] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked + 1] === null) {
    currentArrState[squareIdxClicked + 1] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked + 4] === null) {
    currentArrState[squareIdxClicked + 4] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked - 4] === null) {
    currentArrState[squareIdxClicked - 4] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else {
    console.log ("Clicked square is not in range")
  }
render()
}

function render(){
  arrayNumToSq()
  if(movesCount < 10){
    moves.innerHTML = `Moves 00${movesCount}`
  } else if(movesCount >= 10 && movesCount < 100) {
    moves.innerHTML = `Moves 0${movesCount}`
  } else {
    moves.innerHTML = `Moves ${movesCount}`
  }
  
  playerWin()

  // if it matches, call player win function
}

function tick() {
  timeUp++
  renderTime()
}

function startStopTime(){
  timerInterval = setInterval(tick, 1000)
  setTimeout(gameOver, 300000)
}

function renderTime(){
  mins = Math.floor(timeUp / 60)
  secs = timeUp % 60
  if (secs < 10){
    timer.innerHTML = `Time ${mins}:0${secs}`
  } else {
    timer.innerHTML = `Time ${mins}:${secs}`
  }
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
    document.querySelector("h1").innerText = "Game over! Please click Restart"
    clearInterval(timerInterval)
  // compares variables if timeUp = 5:00 disable clicks on game board
  // or if timeDown = 0:00 
  // then show message " You've lost. Please restart the game"
  // disable moves on a game board
}

function playerWin() {
  let a = randomOrder
  let b = winNumberOrder
  if(a == b){
    document.querySelector('h1').innerText = "You Won!"
  }
  // if numbers in randomOrder array = to winNumberOrder
  // swow message "Congrats, you won!"
  // disable moves on a game board

}


