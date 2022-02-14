/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let randomOrder = []
let timeDown, timerInterval, squareIdxClicked, movesCount
let timeUp
let mins
let secs

/*-------------------Cached Element References-------------------*/
let timer = document.querySelector("#timer")
let numberOfMoves = document.querySelector("#moves")
let playBtn = document.querySelector("#play-btn")
let hOne = document.querySelector("h1")
let gameBoard = document.querySelector(".game-board")
let toggle = document.querySelector("#toggle")
let toggleLabel = document.getElementById("toggle-label")

/*----------------------Event Listeners--------------------------*/
document.querySelector("#play-btn").addEventListener("click", playButton)

document.querySelector("#reset-btn").addEventListener("click", resetButton)

document.querySelectorAll(".number").forEach(square => {
  square.addEventListener("click", handleClick)
});

toggle.addEventListener("click", toggleState)

/*-------------------------Functions-----------------------------*/
init()
function init(){
  randomOrder = []
  timeUp = 0
  movesCount = 0
  secs = 0
  mins = 0
  toggleLabel.classList.remove("disable-clicks")
  playBtn.disabled = false
  if(timerInterval) {
    clearInterval(timerInterval)
    timerInterval = null
  }
  toggleState ()
  moves.innerHTML = `Moves 00${movesCount}`
  gameBoard.classList.add("disable-clicks")
  document.getElementById("sqr15").classList.add("empty")
  shuffleArray()
}

function toggleState (){
  if(toggle.checked){
    mins = 2
    timer.innerHTML = `Time ${mins}:0${secs}`
  }else{
    mins = 0
    timer.innerHTML = `Time ${mins}:0${secs}`
  }
}


function shuffleArray() {
  let shArr = [...winNumberOrder]
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

function playButton(){
  if (document.querySelector("#toggle").checked){
  timerGoesDown()
  }else{
    timerGoesUp()
  }
  toggleLabel.classList.add("disable-clicks")
  playBtn.disabled = true
  gameBoard.classList.remove("disable-clicks")
}

function resetButton(){
  clearArr(randomOrder)
  init()
}

function clearArr(){
  randomOrder.splice(0, 16)
}

function handleClick(sqId) {
  let square = sqId.target.id
  square = parseInt(square.substr(square.indexOf("r") + 1))
  squareIdxClicked = square
  document.getElementById(`sqr${squareIdxClicked}`).classList.add("empty")
  findNull()
  }

function findNull(){
  currentArrState = randomOrder
  const toSwap = squareIdxClicked
  if(randomOrder[squareIdxClicked - 1] === null) {
    document.getElementById(`sqr${toSwap -1}`).classList.remove("empty")
    currentArrState[squareIdxClicked - 1] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked + 1] === null) {
    document.getElementById(`sqr${toSwap +1}`).classList.remove("empty")
    currentArrState[squareIdxClicked + 1] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked + 4] === null) {
    document.getElementById(`sqr${toSwap + 4}`).classList.remove("empty")
    currentArrState[squareIdxClicked + 4] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
  } else if (randomOrder[squareIdxClicked - 4] === null) {
    document.getElementById(`sqr${toSwap - 4}`).classList.remove("empty")
    currentArrState[squareIdxClicked - 4] = currentArrState[squareIdxClicked]
    currentArrState[toSwap] = null
    randomOrder = currentArrState
    movesCount += 1
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
}

function timerGoesUp(){
  timerInterval = setInterval(tick, 1000)
  setTimeout(gameOver, 300000)
  console.log(timerInterval)
}

function tick() {
  timeUp++
  renderTime()
}

function renderTime(){
  mins = Math.floor(timeUp / 60)
  secs = timeUp % 60
  if (secs < 10){
    timer.innerHTML = `Time ${mins}:0${secs}`
  } else {
    timer.innerHTML = `Time ${mins}:${secs}`
  }
  playerWin()
}

function timerGoesDown(){
  let timerSeconds = 120
  timerInterval = setInterval(function() {
  console.log(timerInterval)
  mins = Math.floor(timerSeconds / 60)
  secs = timerSeconds % 60
    timerSeconds -= 1
    if (secs < 10){
      timer.innerHTML = `Time ${mins}:0${secs}`
    } else if(secs > 10) {
      timer.innerHTML = `Time ${mins}:${secs}`
    } else if (mins === 0 && secs === 0){
      hOne.innerText = "Time is Up. Please click restart"
      clearInterval(timerInterval)
    }
  }, 1000)
  
}

function gameOver(){
    hOne.innerText = "Game over! Click Restart"
    clearInterval(timerInterval)
    gameBoard.classList.add("disable-clicks")
}

function playerWin() {
let a = randomOrder
let b = winNumberOrder
let equaltyCheck = a.every(function(elem, idx){
  return elem === b[idx]
  })

if (equaltyCheck){
  hOne.innerText = 'You Won!'
  gameBoard.classList.add("disable-clicks")
  clearInterval(timerInterval)
  }
}




