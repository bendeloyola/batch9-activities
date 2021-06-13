import {logAndFindMixin} from './utils.js'

class MainStore{
    constructor(name, list, earnings){
        this.name = name
        this.list = list
        this.earnings = earnings
    }

    totalEarnings(){
        let formatCurrency = formatter.format(this.earnings);
        console.log(`Store Name: ${this.name} \nEarnings: ${formatCurrency}\n`);
    }

    currentList(){
        console.log(`Title\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Quantity\u00A0\u00A0\u00A0\u00A0\u00A0Value`);
        this.list.map(book => {
            let formatCurrency = formatter.format(book.value);
            console.table(`${book.title}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${book.quantity}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${formatCurrency}`);
        })
        // console.log(`${bookTitles}    ${bookQuantity}    ${bookValue}`);
    }
}


class BookStore extends MainStore{
    constructor(name, list, earnings, parentStore){
        super(name, list, earnings)
        this.parentStore = parentStore
    }

    addBook(title, quantity, value){
        let newBook = {title: title, quantity: quantity, value: value}
        this.list.push(newBook)
        this.parentStore.list.push(newBook)
        logAndFindMixin.add(title)
        return this
      }

    restock(title, quantity){
        this.list.find(book => {
            if (book.title === title){
                book.quantity += quantity;
            } else {
                // console.log(`${title} is not available`);
                logAndFindMixin.restockBook(title)
            }
        })
    }
    sellBook(title, quantity){
        let bookIndex = this.list.findIndex(book => book.title === title)
        if (bookIndex !== -1) {
            const {
              title: StoreTitle,
              quantity: Stock,
              value: Price,
            } = this.list[bookIndex];

            if(Stock >= quantity) {
                logAndFindMixin.sell(title)
                this.list[bookIndex].quantity -= quantity
                let earnings = this.earnings += quantity * Price
                this.parentStore.earnings = earnings
            }
            else{
                // console.log(`${StoreTitle} has only ${Stock} left`) 
                logAndFindMixin.stocks(StoreTitle, Stock)
            }
                
        } else {
            // console.log(`We don't sell ${title} book here`);
            logAndFindMixin.errors(title)
        }  
    }
}

Object.assign(MainStore.prototype, logAndFindMixin)

// just a number format
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


let avionStore = new MainStore("Avion Store", [], 0)
let avionBookStore = new BookStore("Avion Book Store", [], 0, avionStore)

avionBookStore.addBook("Potter", 5, 500)
avionBookStore.addBook("Cinder", 10, 200)
avionBookStore.restock("Potter", 5)
avionBookStore.sellBook("Potter", 9)
avionBookStore.sellBook("Cinder", 2)
// avionBookStore.add(avionBookStore.list.title)
// console.log(avionBookStore.list.title);

// console.log(avionBookStore);
console.log(avionBookStore.list);

// avionStore.totalEarnings();
// avionStore.currentList();

// avionBookStore.totalEarnings()
// avionBookStore.currentList()
