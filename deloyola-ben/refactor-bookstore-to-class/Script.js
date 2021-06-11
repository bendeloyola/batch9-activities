// class Store{
//     constructor(first, second, third){
//         this.first = first
//         this.second = second
//         this.third = third
//     }

//     addStore(){
//         console.log(this.first, this.second, this.third);
//     }
// }

class Store{
    constructor(store){
        this.store = []
    }

    storeLog(){
        console.log(this.store);
    }
}

let stores = new Store()
stores.storeLog()

class MainStore extends Store{
    constructor(name, list, earnings){
        super()
        this.name = name
        this.list = list
        this.earnings = earnings
    }
    
    addStore(){
        let stores = {store: this.name, list: this.list, earnings: this.earnings}
        this.store.push(stores)
    }
    
}

let sampleStore = new MainStore("Avion Store", [], 0);
sampleStore.addStore()
let laptopStore = new MainStore("Asus", [], 0);
laptopStore.addStore()

class Book extends MainStore{
    constructor(title, quantity, value){
        super()
        this.title = title
        this.quantity = quantity
        this.value = value
    }

    addBook(){
        // console.log(sampleStore);
        let newBook = {title: this.title, quantity: this.quantity, value: this.value}
        sampleStore.list.push(newBook)
        // console.log(sampleStore.list);
      }
    
    findBook(){
        sampleStore.list.find(book => book.title === this.title)
    }
  
}

let mybook = new Book("Potter", 5, 500);
let newBook = new Book("Cinder", 10, 300);
mybook.addBook()
newBook.addBook()

class Restock extends Book{
    constructor(title, quantity) {
        super()
        this.title = title
        this.quantity = quantity
    }

    findBook(){

        sampleStore.list.find(book => {
            if (book.title === this.title){
                book.quantity += this.quantity;
            }
        })
    }

}

let restockBooks = new Restock("Potter", 1);

restockBooks.findBook()

class SellBook extends Restock{
    constructor(title, quantity){
        super()
        this.title = title
        this.quantity = quantity
    }

    findBook(){
        // super.findBook()
        // console.log(sampleStore.list[index].quantity);
        let bookIndex = sampleStore.list.findIndex(book => book.title === this.title)

        if (bookIndex !== -1) {
            const {
              title: StoreTitle,
              quantity: Stock,
              value: Price,
            } = sampleStore.list[bookIndex];
        
            console.log('Successful transaction');
        
            (Stock < this.quantity) ? console.log(`${StoreTitle} has only ${Stock} left`) : sampleStore.list[bookIndex].quantity -= this.quantity; sampleStore.earnings += this.quantity * Price;
        
        } else {
            console.log(`We don't sell ${this.title} book here`);
        }
    }

}

let newSell = new SellBook("Harry Potter", 2);
newSell.findBook()


// just a number format
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

class totalEarnings extends MainStore{
    constructor(){
       super()
    }   

    total(){
        let formatCurrency = formatter.format(sampleStore.earnings);
        console.log(`Store Name: ${sampleStore.name} \nEarnings: ${formatCurrency}\n`);
    }

}

class ListInventory extends MainStore{
    constructor(){
        super()
    }

    currentList(){
        console.log(`Title\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Quantity\u00A0\u00A0\u00A0\u00A0\u00A0Value`);
        sampleStore.list.map(books => {
            let formatCurrency = formatter.format(books.value);
            console.table(`${books.title}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${books.quantity}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${formatCurrency}`);
        })
        // console.log(`${bookTitles}    ${bookQuantity}    ${bookValue}`);
    }
}

let totalEarn = new totalEarnings();
totalEarn.total()
let totalList = new ListInventory();
totalList.currentList()