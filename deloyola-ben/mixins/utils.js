export let logAndFindMixin = {
    add() {
      console.log(`${this.title} : Successfuly Added book`);
    },
    sell() {
        console.log(`${this.name} : Successful transaction`);
    },
    restock(){
        console.log(`${this.name} : Restocked book`);
    },
    errors(){
        console.log(`${this.name} : Restocked book`);
    }
  };