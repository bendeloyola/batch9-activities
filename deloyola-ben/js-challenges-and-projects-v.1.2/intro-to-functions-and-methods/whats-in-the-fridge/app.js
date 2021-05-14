const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []


//Challenge: Please fill the fridge array with 5 items of your choice. 

fridge.push('orange', 'hotdogs', 'coke', 'salad', 'water');

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
var item = buyList.shift()
fridge.push(item);


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp(){
    //your code
    // buyList.push(fridge[0]);
    // fridge.shift();
   
    // fridge.forEach(function(item, index) {
    //     fridge.splice(index, 1);
    //     buyList.push(item);
    //     console.log(fridge)
    //   });
    
    
    if(fridge.length !== 0){
        var data = fridge.shift()
        buyList.push(data)
        console.log(buyList);
        
        return buyList
        
    } else {
        console.log(fridge);
        return null
    }
}


upButton.addEventListener('click', moveUp)


//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    //your code
   
    if(buyList.length !== 0){
        var data =  buyList.pop(data);
        fridge.push(data)
        console.log(buyList);
        return fridge
    } else {
        console.log(fridge);
        return null
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge

