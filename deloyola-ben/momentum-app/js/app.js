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
let mainFocus = document.getElementById("mainFocus")
let mainFocusH2 = document.getElementById("mainFocusH2")

let createNewButton = document.createElement("button")
let mediaQuery450px = window.matchMedia('(max-width: 450px)')
let mediaQuery768px = window.matchMedia('(max-width: 768px)')
let mediaQuery1200px = window.matchMedia('(max-width: 1200px)') 
let enterName = document.querySelector('.enter-name')
let wrapper = document.querySelector('.wrapper');

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

    
//main focus value
mainFocus.onkeydown = function(e){
    if(e.keyCode == 13){
        
        let addP = document.createElement("p")
        let itemText = document.createTextNode(mainFocus.value)

        mainFocus.style.display = "none"
        addP.appendChild(itemText)
        addP.style.color = "white"
        addP.style.display = "block"
        mainFocusH2.appendChild(addP)

        mainFocus.value = ""
        
    }
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
        const inputValName = document.createElement("input").value = nameInputVal.value;
        heroTextVal.textContent = "Good Day, " + inputValName + "!"
        nameInputVal.style.display = "none"
        document.getElementById("todoListBtnOpen").style.display = 'block'
        wrapper.style.display = 'block'
        addTodoList.style.display = "flex"
        addTodoList.style.justifyContent = "space-around"
        enterName.style.top = '40%'
        
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

// media query change
function WidthChange(mediaQuery450px) {
    if (mediaQuery450px.matches) {
      // window width is at least 500px
      addTodoList.classList.remove("container-main")
      addTodoList.classList.add("container-flex")
    } else {
        addTodoList.classList.remove("container-flex")
        addTodoList.classList.add("container-main")
    }
  
}

function ipadChange(ipad){
    if (ipad.matches) {
        addTodoList.classList.remove("container-main")
        addTodoList.classList.add("container-ipad")
    
    }else {
        addTodoList.classList.remove("container-ipad")
        addTodoList.classList.add("container-main")
    }
}


// todoInputVal.onkeydown = function(e){
//     if(e.keyCode == 13){
//         let itemText = document.createTextNode(todoInputVal.value)

//         addLi.appendChild(itemText)
//         focusToday.appendChild(addLi)

//         todoInputVal.value = ""
//     }
// }

  (function () {
    addQoutes.addEventListener('click', function () {
    //   let input = document.querySelector('#text');
    //   let list = document.querySelector('#list'); 

      let addLi = document.createElement("li")
      let itemText = document.createTextNode(qoutesInput.value); // create text node
      
     
        console.log(itemText);
        addLi.appendChild(itemText); // append text node to li node
        addLi.innerHTML += ' <button class="btn-remove" onclick="this.parentNode.remove()"><i class="fas fa-trash"></i></button>';
        // addLi.innerHTML += '<span class="qoute-li" onclick="this.parentNode.remove()"><i class="fas fa-trash"></i></span>'
        qoutesList.appendChild(addLi); // append li node to list
        
        qoutesInput.value = ""; // clear input
     
    });
  })();