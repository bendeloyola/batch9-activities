//NAG TRY AKO NG GUSTO IPAGAWA NI SIR PAU KAY BENSON, ILAGAY SA LOOB NG FOR LOOP

  let userData = [{
    firsName: 'Lebron',
    age: 34,
    email: 'lebron@gmail.com'
}, {
    firsName: 'qwe',
    age: 24,
    email: 'qwe@gmail.com'
}]

const findUserData = (userData) => {
  
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            
            if( userData ) {
                resolve(userData);
            } else {
                reject("User data not found")
            }
        }, 3000)
    })
}

for(let i = 0; i < userData.length; i++ ){
    findUserData(userData[i])
    .then( (success) => console.log(success))
    .catch( (error) => console.log(error) );    
}

findUserData(null)
.then( (success) => console.log(success))
.catch( (error) => console.log(error) );
