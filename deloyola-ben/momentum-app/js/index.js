let currentTimeDiv = document.querySelector("#currentTime")
let currentDate = document.querySelector("#date")
let hourHand = document.querySelector("#hourHand")
let secondHand = document.querySelector("#secondHand")
let minuteHand = document.querySelector("#minuteHand")
let nameInputVal = document.getElementById("nameInput");
let heroTextVal = document.getElementById("heroText");
let createNewDiv = document.createElement("div")
let header2 = document.createElement("h2")
let add = document.querySelector('#add');
let newInput = document.createElement("input")
let focusToday = document.getElementById("focusToday");
let qoutesInput = document.getElementById("qoutesInput")
let qoutesList = document.getElementById("qoutesList")
let addQoutes = document.querySelector('#addQoutes');
let addTodoList = document.getElementById("addTodo")
let todoInputVal = document.getElementById("todoInput")
let createNewButton = document.createElement("button")
let mediaQuery450px = window.matchMedia('(max-width: 450px)')
let mediaQuery768px = window.matchMedia('(max-width: 768px)')
let mediaQuery1200px = window.matchMedia('(max-width: 1200px)') 
let enterName = document.querySelector('.enter-name')

setInterval(display, 0)
//date time display function
function display(){

    //for time
    var today = new Date();
    var time = today.toLocaleString('PHT', { hour: 'numeric', minute: 'numeric', hour12: true })
    
    //for date
    let date =  new Date().toDateString();
    
    // currentTimeDiv.innerHTML = time;
    currentDate.innerHTML = date;
}

    

setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

nameInputVal.onkeydown = function(e){
    if(e.keyCode == 13){
        // console.log(nameInputVal.value);
        heroTextVal.textContent = "Good Day, " + nameInputVal.value + "!"
        nameInputVal.style.display = "none"
        addTodoList.style.display = "flex"
        addTodoList.style.justifyContent = "space-around"
        enterName.style.top = '20%'
        
        if(mediaQuery450px){
            mediaQuery450px.addListener(WidthChange);
            WidthChange(mediaQuery450px);
          
        } 

        if(mediaQuery768px){
            mediaQuery768px.addListener(ipadChange);
            ipadChange(mediaQuery768px);
        }
        
    }
}