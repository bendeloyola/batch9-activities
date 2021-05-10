var singleElement = document.getElementById("first-h3");
var multipleElements = document.getElementsByTagName("p");

singleElement.textContent = "Hello";
multipleElements[0].style.background = "red";

var newDiv = document.createElement("div");
var newBtn = document.createElement("button");

newBtn.textContent = "Counter";
newBtn.style.width = "100px";
newBtn.style.height = "40px";
newBtn.style.background = "blue"
newBtn.style.color = "#fff";
newBtn.style.borderRadius = "5px";
newBtn.style.cursor = "pointer";

singleElement.appendChild(newDiv);
newDiv.appendChild(newBtn);


newBtn.addEventListener('click', evenOdd);

function CounterFlow(){
    for(let counter = 0; counter <= 5; counter++ ){
        alert("Counter: " + counter);
    }
    
}



function evenOdd(){
    var people = 58;

    for(let counter = 0; counter <= people; counter++ ){
        if(people % 2 == 0){
            console.log("blue team");
        } else {
            console.log("red team");
        }
    }

}