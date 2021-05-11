const squares = Array.from(document.querySelectorAll('.grid div'))
//Nodelist of all the div squares on our board. Think of it as an array. 


//Your goal is to add a chessboard color pattern to this blank board using loops and Arrays.
//write code here

console.log(squares[0]);

for(let i = 0; i < squares.length; i++){
    squares[i].style.background = "wheat"
   for(let j = 0; j < squares.length; j++){
       if(j % 2 === 0){
        squares[j].style.background = "black"
       }
   }
}