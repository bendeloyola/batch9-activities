const currentTimeDiv = document.querySelector("#currentTime")
const currentDate = document.querySelector("#date")
const nameInput = document.getElementById("nameInput");


//for time
var today = new Date();
var time = today.toLocaleString('PHT', { hour: 'numeric', minute: 'numeric', hour12: true })

//for date
let date =  new Date().toDateString();


currentTimeDiv.innerHTML = time;
currentDate.innerHTML = date;