/*--------------------------- Constants -------------------------*/
const winNumberOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, null]

/*--------------------- Variables (state) -----------------------*/
let time, NumberOfMoves
let randomOrder =[]

/*-------------------Cached Element References-------------------*/
let timer = document.querySelector("#timer")
console.log(timer.innerText)

let numberOfMoves = document.querySelector("moves")
console.log(moves.innerText)

/*----------------------Event Listeners--------------------------*/
document.querySelector("#play-btn").addEventListener("click", shuffleArray())

document.querySelector("#reset-btn").addEventListener("click", () => console.log("Clicked Reset Button"))




/*-------------------------Functions-----------------------------*/

function init(){
  

}


function shuffleArray() {
  let shArr = winNumberOrder
  shArr.sort(() => Math.random() - 0.5)
  shArr.push(shArr.splice(shArr.indexOf(null), 1)[0])
  randomOrder = shArr
}

console.log(randomOrder)









// function randomNumbers(){
//   for(i = 0; i < 16; i++){
//     let num = Math.floor((Math.random() * 15) + 1)
//     if (num !== randomOrder.includes(num)){
//     randomOrder.unshift(num)
//     } else {
//     return
//   }
    

//     console.log(randomOrder)
//   }
// }

