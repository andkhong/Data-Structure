class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(value){
  	if(!this.head){
  		let temp = new Node(value);
  		this.head = temp;
  		this.tail = temp;
  		return temp;
  	}
  	if(!this.tail.next){
  		this.tail.next = new Node(value);
  		this.tail = this.tail.next;
  		return this.tail.next;
  	}
  }

  contains(value){
    let current = this.head;
    while(current){
      if(current.value === value) return true;
      else current = current.next;
    }
    return false;
  }

  addToHead(value){
    let newHead = new Node(value);
    newHead.next = this.head;
    this.head = newHead;
  }

  remove(value){
    if(this.head.value === value){
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while(current){
      if(current.next.value !== value) current = current.next;
      else {
        current.next = current.next.next;
        return;
      }
    }
  }

}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
