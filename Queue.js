class Queue {
  constructor(){
    this.storage = {};
    this.index = 0;
    this.counter = 0;
  }

  enqueue(value){
    this.storage[this.index] = value;
    this.index++;
  }

  dequeue(){
    if (this.index === 0) return undefined;
    let temp = this.storage[this.counter];
    delete this.storage[this.counter];
    this.counter++;
    return temp;
  }

}
