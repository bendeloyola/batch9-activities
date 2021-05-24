class Player{
    constructor(name, country){
        this.name = name,
        this.country = country
    }

    Print(){
        console.log(`${this.name} was born in ${this.country}`);
    }

}

let newPlayer = new Player('Messi', 'Argentina')
newPlayer.Print()

class BasketBallPlayer extends Player{
    constructor(name, age){
        super(name);
        this.age = age;
    }

    Print(){
        console.log(`${this.name} is ${this.age} years old and knows how to play Basketball`);
    }

}

let newBasketBallPlayer = new BasketBallPlayer('Lebron', 34)
newBasketBallPlayer.Print()