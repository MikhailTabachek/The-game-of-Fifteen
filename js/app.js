/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let randomOrder =[]

/*-------------------Cached Element References-------------------*/
// let timer = document.querySelector("#timer")

// let numberOfMoves = document.querySelector("moves")

/*----------------------Event Listeners--------------------------*/
document.querySelector("#play-btn").addEventListener("click", console.log("Clicked Play Button"))

document.querySelector("#reset-btn").addEventListener("click", () => console.log("Clicked Reset Button"))

document.querySelector(".number").forEach(square => {
  square.addEventListener("click", handleClick)
});

/*-------------------------Functions-----------------------------*/

init()
function init(){
  //// set timer to 0:00
  timer = timer.innerHTML = "Time 0:00"
  console.log(timer)
  // set moves to 0
  moves = moves.innerHTML = "Moves 000"
  console.log(moves)
  // set level to easy

  //// initialize shuffleArray function
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


