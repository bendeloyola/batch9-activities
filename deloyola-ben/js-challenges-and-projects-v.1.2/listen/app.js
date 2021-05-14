var button = document.getElementById("btn")

document.addEventListener('keydown', pressBtn)

function pressBtn(event){

    if(event.key === 'd'){
        console.log(event.key);
        alert('You pressed: ' + event.key)
    } else if(event.key === 'a'){
        console.log(event.key);
        alert('You pressed: ' + event.key)
    
    } else {
        alert('You presssed not on the list')
    }
}
