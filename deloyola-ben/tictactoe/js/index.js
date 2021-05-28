//selecting all required elements
const selectBox = document.querySelector(".select-box")
const playerX = document.querySelector(".playerX")
const playerO = document.querySelector(".playerO")
const playBoard = document.querySelector(".play-board")
const players = document.querySelector(".players")
const allBox = document.querySelectorAll("section span")
const resultBox = document.querySelector(".result-box")
const wonText = document.querySelector(".won-text")
const replayBtn = document.querySelector(".btn")
const switchTheme = document.querySelector("#switch-mode")



const WINNING_COMBINATIONS = [
    [1, 2, 3],
    [4, 5, 6],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]

let playerXIcon = "fas fa-times" //fontawesome X icon
let playerOIcon = "far fa-circle" // fontawesome O icon
let playerSign = "X" // if player is X


// switchTheme.onclick = () =>{

// }

window.onload = () =>{

    // for(let i = 0; i < allBox.length; i++){ // add onclick attribute in all sections span
    //     allBox[i].setAttribute("onclick", "clickedBox(this)")
    // }
    allBox.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true})
    })

    playerX.onclick = () =>{
        selectBox.classList.add("hide") // hide select box on playerX button clicked
        playBoard.classList.add("show") // show the play board section
    }
    playerO.onclick = () =>{
        selectBox.classList.add("hide") // hide select box on playerO button clicked
        playBoard.classList.add("show") // show the play board section
        players.setAttribute("class", "players active player") // adding 3 class name in player element
    }
}

let circleTurn = players.classList.contains("player");

// player click function
let handleClick = (e) => {
    const cell = e.target
    const currentClass =   circleTurn ? `<i class="${playerOIcon}"></i>` : `<i class="${playerXIcon}"></i>`
    placeMark(cell, currentClass)


    

    swapTurns();
    if(checkWin(currentClass)){
        console.log("winner");
    }
}

let checkWin = (currentClass) => {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return allBox[index].classList.contains(currentClass)
        })
    })
}

let placeMark = (cell, currentClass) => {
    cell.innerHTML = currentClass
    players.classList.add("active")
}

let swapTurns = () => {
    circleTurn = !circleTurn
}



// let clickedBox = (element) => {
//     // console.log(element)
//     if(players.classList.contains("player")){ // if player element contains player class   
//         element.innerHTML = `<i class="${playerOIcon}"></i>` // adding O icon
//         players.classList.add("active")

//         playerSign = "O" // player we'll change the sign to O
//         element.setAttribute("id", playerSign)

//     } else {
//         element.innerHTML = `<i class="${playerXIcon}"></i>` // adding X icon
//         players.classList.add("active")

//         element.setAttribute("id", playerSign) // player sign change to X
//     }
  
//     swapTurn();
// }

