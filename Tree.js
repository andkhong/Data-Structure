class Tree {
  constructor(value){
    this.value = value;
    this.children = [];
  }

  add(value){
    let node = new Tree(value);
    this.children.push(node);
  }

  contains(value){
    let stack = [this];
    while(stack.length > 0){
      let node = stack.pop();
      if(node.value === value) return true;
      else{
        for(let i = 0; i < node.children.length; i++){
          stack.push(node.children[i]);
        }
      }
    }
    return false;
  }

}
