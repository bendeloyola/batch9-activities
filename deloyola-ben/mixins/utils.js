export let logAndFindMixin = {
    add(title) {
      console.log(`${title} : Successfuly Added book`);
    },
    sell(title) {
        console.log(`${title} : Successful transaction`);
    },
    restockBook(title){
        console.log(`${title} : Restocked book`);
    },
    errors(title){
        console.log(`${title} : We don't sell ${title} book here`);
    },
    stocks(title, Stock){
        console.log(`${title} : has only ${Stock} left`);
    },
    // find(title){

    // }
  };