const nightClubRegister = [
    {
        name: 'Tony',
        lastname: 'Stark',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Harry',
        lastname: 'Potter',
        age: 16,
        gender: 'male'
    },
    {
        name: 'Hermione',
        lastname: 'Granger',
        age: 17,
        gender: 'female'
    },
    {
        name: 'Steve',
        lastname: 'Rogers',
        age: 62,
        gender: 'male'
    }
]


for(let i = 0; i < nightClubRegister.length; i++ ){
    if(nightClubRegister[i].age >= 18){
        if(nightClubRegister[i].gender === "male"){
            console.log("Welcome to night club! Mr. " + nightClubRegister[i].name)
        } else {
            console.log("Welcome to night club! Ms. " + nightClubRegister[i].name)
        }
    } else {
        if(nightClubRegister[i].gender === "female")
            console.log("Ms. " + nightClubRegister[i].name + " Sorry you are not allowed here.");
        else{
            console.log("Mr. " + nightClubRegister[i].name + " Sorry you are not allowed here.");
        }
    }
}