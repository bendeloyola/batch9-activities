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


// switchTheme.onclick = () =>{

// }

window.onload = () =>{

    for(let i = 0; i < allBox.length; i++){ // add onclick attribute in all sections span
        allBox[i].setAttribute("onclick", "clickedBox(this)")
    }

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

let playerXIcon = "fas fa-times" //fontawesome X icon
let playerOIcon = "far fa-circle" // fontawesome O icon
let playerSign = "X" // if player is X
let runBot = true

// player click function
let clickedBox = (element) => {
    // console.log(element)
    if(players.classList.contains("player")){ // if player element contains player class   
        element.innerHTML = `<i class="${playerOIcon}"></i>` // adding O icon
        players.classList.add("active")

        playerSign = "O" // player we'll change the sign to O
        element.setAttribute("id", playerSign)

    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>` // adding X icon
        players.classList.add("active")

        element.setAttribute("id", playerSign) // player sign change to X
    }

    selectWinner(); // call the winner
    playBoard.style.pointerEvents = "none" // only once box selected cannot select any other box
    element.style.pointerEvents = "none" // only once box selected
    let randomDelayTime = (Math.random()* 1000).toFixed() // delay bot select boxes
    setTimeout(() => {
        botPlayer(runBot) // bot turns
    }, randomDelayTime) // delay time 
}


//player bot fucntion
let botPlayer = (runBot) =>{
    if(runBot){ // if runBot is true then run these codes
        //first change the player sign, if player is X id then bot is O id
    playerSign = "O"
    let emptyBox = [] // store unselected box
    for(let i = 0; i < allBox.length; i++){
        if(allBox[i].childElementCount == 0){ // if span has no any child element
            emptyBox.push(i) // store in emptyBox all span that has no child element or unselected boxes
            // console.log(`${i} has no children`);
        }
    }
    let randomBoxByBot = emptyBox[Math.floor(Math.random() * emptyBox.length)] // random index from emptyBox array bot box selected
    // console.log(randomBoxByBot);
    if(emptyBox.length > 0){
        if(players.classList.contains("player")){ // if player element contains player class    
            allBox[randomBoxByBot].innerHTML = `<i class="${playerXIcon}"></i>` // adding X icon
            players.classList.remove("active")
            //if user is O then the box value will be X
            playerSign = "X"
            allBox[randomBoxByBot].setAttribute("id", playerSign) 
        
        } else {
            allBox[randomBoxByBot].innerHTML = `<i class="${playerOIcon}"></i>` // adding O icon
            players.classList.remove("active")
            allBox[randomBoxByBot].setAttribute("id", playerSign)
        }
        selectWinner(); // call the winner
    }
    allBox[randomBoxByBot].style.pointerEvents = "none" // if Player bot already selected the box you cannot select it.
    playBoard.style.pointerEvents = "auto" 
    playerSign = "X" // passing the X value
    }
}

//select the winner

const getId = (idname) =>{
    return document.querySelector(".box" + idname).id; //returning id name
}

const checkClass = (val1, val2, val3, sign) =>{
    if(getId(val1) == sign && getId(val2) == sign & getId(val3) == sign){
        return true
    }
}

const selectWinner = () => { // if one combination is matched then select the winner
    if(checkClass(1,2,3,playerSign) || checkClass(4,5,6,playerSign) || checkClass(6,7,8,playerSign) || checkClass(1,4,7,playerSign) || checkClass(2,5,8,playerSign) || checkClass(3,6,9,playerSign) || checkClass(1,5,9,playerSign) || checkClass(3,5,7,playerSign)){
        // console.log(playerSign + " " + "is a winner");
        //once someone won then stop the bot 
        runBot = false
        botPlayer(runBot)

        //show the winner result box
        setTimeout(()=> { //well delay to show the result box
            playBoard.classList.remove("show")
            resultBox.classList.add("show")
        }, 700) // 700ms delay

        wonText.innerHTML = `Player <p>${playerSign}</p> won!`
    } else {
        //if draw
        if(getId(1) != "" && getId(2) != "" && getId(3) != "" && getId(4) != "" && getId(5) != "" && getId(6) != "" && getId(7) != "" && getId(8) != "" && getId(9) != ""){
            runBot = false
            botPlayer(runBot)

            //show the winner result box
            setTimeout(()=> { //well delay to show the result box
                playBoard.classList.remove("show")
                resultBox.classList.add("show")
            }, 700) // 700ms delay

            wonText.textContent = "Match draw!"
        }
    }
}

replayBtn.onclick = () =>{
    window.location.reload() //reload the current page
}