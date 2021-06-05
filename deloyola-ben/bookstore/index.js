let store = {
    name: 'My Store',
    inventoryList:[],
    earnings: 0
}


function book(title, quantity, value){
    this.title = title,
    this.quantity = quantity,
    this.value = value
}   

function addBook(title, quantity, value){
   let newBook = new book(title, quantity, value)
   store.inventoryList.push(newBook)
}

// check kung existing na ang book add nalang quantity, pag di pa add yung book.
function restockBook(title, quantity){

    let newTitle = title;
    let newQuantity = quantity
    if (store.inventoryList.some(({title}) => title === newTitle)) { // pag check kung existing na ang book title
        
        for (let i = 0; i < store.inventoryList.length; i++) { // check existing quantity ni book
           
            console.log( store.inventoryList[i].quantity);
            for(let j = 0; j < store.inventoryList[i].quantity.length; j++){
                store.inventoryList[i].quantity += newQuantity // add bagong quantity
            }
           
        }
       
    } else {
        console.log('not exist');
        addBook(title, quantity) // add book kasi di pa exist
    }
  
}

addBook('Americanah', 5, 25)


// console.log(store.inventoryList);

restockBook('carolina', 1)
restockBook('carolina', 2)


console.log(store.inventoryList);

//  let newAdded = new Store('asdsad', )

// let newBook = new Book('Americanah', 5, 25);


// console.log(newInStore.inventoryList);
// let newAdded =  newInStore.inventoryList

// function restockBook(title, quantity){
//     // let exsisting = newInStore.inventoryList.includes(title)
//     // console.log(exsisting);
//     // console.log(addToStore);
//     // let result = addToStore.inventoryList.includes(title)
//     // if(addToStore == true){
//     //     console.log('true');
//     //     let addBook = bookDetails(newBook)
//     // } else {
//     //     let addBook = new Store(null, newBook, null)
//     //     console.log(addBook.inventoryList);
//     // }
// }

// restockBook('Americanah', 2)

// // console.log(newInStore.inventoryList);
// // console.log(newInStore);