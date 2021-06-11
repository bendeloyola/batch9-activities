let store = function(name, inventoryList, earnings){
    this.name = name,
    this.inventoryList = inventoryList,
    this.earnings = earnings
}  


let book = function(title, quantity, value){
    this.title = title,
    this.quantity = quantity,
    this.value = value
}   

let myStore = new store('National Ben Store XD', [], 0)

function addBook(title, quantity, value){
   let newBook = new book(title, quantity, value)
  
   myStore.inventoryList.push(newBook)
 
}

addBook('Legend', 50, 200)
addBook('Cinder', 50, 50)
// console.log(myStore.inventoryList);

// check kung existing na ang book add nalang quantity, pag di pa add yung book.
let restockBook = (title, quantity) =>{

    let bookExist = myStore.inventoryList.findIndex((book) => book.title === title); // check kung exist na ang book title at find the index key of it.

    if (bookExist === -1) {
        return addBook(title, quantity, 500)
    } else {
        return myStore.inventoryList[bookExist].quantity += quantity
    }
}

// console.log(myStore.inventoryList[0].title);
restockBook('Cinder', 2)
restockBook('Cinder', 5)
restockBook('Legend', 1)
restockBook('Island', 5)
// console.log(myStore.inventoryList);

let sellBook = (title, quantity) => {

    let bookAvailable = myStore.inventoryList.findIndex((book) => book.title === title);
    // let bookQty = myStore.inventoryList[bookAvailable].quantity   // question later

    if(bookAvailable === -1 || myStore.inventoryList[bookAvailable].quantity === 0){
        console.log(`${title} out of stock\n`)
    } else if(myStore.inventoryList[bookAvailable].quantity < quantity) {
        console.log(`${title} only ${myStore.inventoryList[bookAvailable].quantity} stocks left\n`);
    } else {
        myStore.inventoryList[bookAvailable].quantity -= quantity
        let newEarnings =  myStore.inventoryList[bookAvailable].value * quantity
        myStore.earnings += newEarnings
    }
}

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

sellBook('Legend', 50)
sellBook('Legend', 1)
sellBook('Island', 4)
sellBook('Cinder', 20)
sellBook('Island', 1)
// console.log(myStore.inventoryList);


let totalEarnings = () => {
    let formatCurrency = formatter.format(myStore.earnings);
    console.log(`Store Name: ${myStore.name} \nEarnings: ${formatCurrency}\n`);
}

let listInventory = () => {
    // myStore.inventoryList.forEach(books => {
    //     console.log(`Title: ${books.title} \nQuantity: ${books.quantity} \nValue: ${books.value}`);
    // })

    //  let bookTitles = myStore.inventoryList.map(function(book){ return book.title });
    //  let bookQuantity = myStore.inventoryList.map(function(book){ return book.quantity });
    //  let bookValue = myStore.inventoryList.map(function(book){ return book.value });

    // console.log(`Title                    Quantity                   Value`);
    console.log(`Title\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Quantity\u00A0\u00A0\u00A0\u00A0Value`);
    myStore.inventoryList.map(books => {
     
        console.table(`${books.title}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${books.quantity}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${books.value}`);
    })
    // console.log(`${bookTitles}    ${bookQuantity}    ${bookValue}`);
    
}

totalEarnings()
listInventory()