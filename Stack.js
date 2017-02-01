class Stack {
  constructor(){
    this.storage = {};
    this.index = 0;
  }

  push(value){
    this.storage[index] = value;
    this.index++;
  }

  pop(){
    this.index--;
    let temp = this.storage[this.index];
    delete this.storage[this.index];
    return temp;
  }

}
