class MainStore{
    constructor(name, list, earnings) {
        this.name = name
        this.list = list
        this.earnings = earnings
    }

    // add(title, quantity, value){
    //     this.list.push(title, quantity, value)
    // }

    add(newItem){
        this.list.push(newItem)
        console.log(this.list);
    }
}

let aStore = new MainStore('Avion Store', [], 0)

class Book{
    constructor(title, quantity, value){
        this.title = title
        this.quantity = quantity
        this.value = value
    }
}

let newBook = new Book('Cinder', 10, 200)

class BookStore extends MainStore{
    constructor(name){
        super(name)
    }

    addBook(title, quantity, value){
        let newBook = new Book(title, quantity, value)
        console.log(newBook);
        super.add(newBook)
    }
}

let bookDetails = new BookStore('Nation')
bookDetails.addBook('Potter', 20, 300)