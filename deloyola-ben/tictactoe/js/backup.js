

// selecting all "startingPage" tags
let startingPage = document.querySelector("#startingPage");
let choose = document.querySelectorAll(".choose")

// selecting all "main page" tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// header buttons 
let headerBtns = document.querySelector("#headerBtns")
let historyTitle = document.querySelector("#historyTitle")

// selecting all "winner page" tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName")
let quit = document.querySelector("#quit")

//history button
let historyBtn = document.querySelector("#historyBtn")
let prevNextBtnsContainer = document.querySelector(".history-buttons")

// next and 
let previousBtn = document.querySelector('#previousBtn');
let nextBtn = document.querySelector('#nextBtn');

// change turns
// false => X's turn
// true => O's turn
let changeTurn = null

let X  = '<i class="fas fa-times"></i>' 
let O  = '<i class="far fa-circle"></i>'


// select player 
// X or O
choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", ()=>{
        if(chooseNow.id === "playerX"){
            changeTurn = false;
            // console.log(changeTurn);
            showChange.style.left = '0px'
        } else {
            changeTurn = true;
            // console.log(changeTurn);
            showChange.style.left = '160px'
        }

        startingPage.style.display = "none"
        mainPage.style.display = "block"
    })
})

historyBtn.addEventListener("click", () => {
    mainPage.style.display = "block"
    prevNextBtnsContainer.style.display = "block"
    winner.style.display = "none"
    headerBtns.style.display = 'none'
    historyTitle.style.display = 'block'
    boxes.forEach(items =>{
        items.style.pointerEvents = "none"
    })
})

let boardArray = []
let previousMoveArray = [];

boxes.forEach(items =>{
    items.addEventListener("click", (e)=>{

        //know wich cell was clicked
        const target = e.target;
        //check list of classes
        const classList = target.classList;
        //select second class as identifier of cell location
        const cell = classList[1];
        //add class to cell if xturn or not
        const player = classList[2];
         //if class already contains x or o
        if (player === 'X' || player === 'O') {
            return;
        }

        // add X icon if change turn = false
        // add O icon if change turn = true
        if(changeTurn == false){
            items.innerHTML = X
            items.id = "X";
            saveMove(cell, 'X');
            
            items.style.pointerEvents = "none"
            showChange.style.left = '160px'

            // change the "change turn" value flase into true
            changeTurn = true
        } else {
            items.innerHTML = O
            items.id = "O";
            saveMove(cell, 'O');
            
           items.style.pointerEvents = "none"
            showChange.style.left = '0px'

            // change the "change turn" value flase into true
            changeTurn = false
        }

        winningFunc()
        drawFunc()
    })
})

function saveMove(items, player) {
    let moveObject = {};
    moveObject.items = items;
    moveObject.player = player;
    //add move to board
    boardArray.push(moveObject);
    console.log(boardArray);
}


//previous button
previousBtn.addEventListener('click', () => {
    nextBtn.style.visibility = 'visible'
    if (boardArray.length != 0) {
        let lastMove = boardArray[boardArray.length - 1]; //move object
        console.log(lastMove);
        // let targetCell = boxes[parseInt(lastMove.cell)];
        // console.log(targetCell);
        // let current = targetCell.boardArray.remove(targetCell.classList[2]);
        let current = boardArray.pop(lastMove)
        console.log(current);
        previousMoveArray.push(lastMove);
        // boardArray.pop();
        console.log(boardArray);
    } else {
        previousBtn.style.visibility = 'hidden';
    }
});





// all possible winning combinations
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let winningFunc = () => {
    for(let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
        // console.log(b);

        if(boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == ""){
            continue;
        } else if(boxes[b[0]].id == "X" && boxes[b[1]].id == "X" && boxes[b[2]].id == "X"){
            // console.log("x winner");
            // add winner text
            winnerName.innerText = `Player X win`

            //show winner page & hide main page
            mainPage.style.display = "none"
            winner.style.display = "block"

        } else if(boxes[b[0]].id == "O" && boxes[b[1]].id == "O" && boxes[b[2]].id == "O"){
            // console.log("o winner");
             // add winner text
             winnerName.innerText = `Player O win`

             //show winner page & hide main page
             mainPage.style.display = "none"
             winner.style.display = "block"
        } else {
            continue;
        }
    }
}

// Draw function

let drawFunc = () => {
    if(boxes[0].id !== "" && boxes[1].id !== "" &&
       boxes[2].id !== "" && boxes[3].id !== "" &&
       boxes[4].id !== "" && boxes[5].id !== "" &&
       boxes[6].id !== "" && boxes[7].id !== "" &&
       boxes[8].id !== ""){
            // add draw text
            winnerName.innerText = `Match Draw!`

            //show winner page & hide main page
            mainPage.style.display = "none"
            winner.style.display = "block"
       }
}

//reset game
quit.addEventListener("click", () => {
    window.location.reload();
})