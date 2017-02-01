class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if(this.value === undefined || null) return new BinarySearchTree(value);
    let current = this;
    let newNode = new BinarySearchTree(value);

    while(current){
      if(value < current.value) {
        if(current.left) current = current.left;
        else {
          current.left = newNode;
          return;
        }
      } else {
          if(current.right) current = current.right;
          else {
            current.right = newNode;
            return;
          }
        }
      }
  }

  contains(value){
    let current = this;
    while(current){
      if (current.value === value) return true;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return false;
  }

  getMin(){
    let current = this;
    while(current.value){
      if(current.left) current = current.left;
      else return current.value;
    }
  }

  getMax(){
    let current = this;
    while(current.value){
      if(current.right) current = current.right;
      else return current.value;
    }
  }

  getHeight(){
    const getHeight = (tree) => {
      if(tree){
        return 1 + Math.max(getHeight(tree.left), getHeight(tree.right));
      } else return 0;
    }
    return getHeight(this) - 1;
  }

  breadthFirst(callback){
    let queue = [this];
    while(queue.length > 0){
      let node = queue.shift();
      callback(node.value);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
  }

  depthFirstPre(){
    const traverse = (tree) => {
      if(tree === null) return;
      callback(tree.value);
      traverse(tree.left);
      traverse(tree.right);
    }
    traverse(this);
  }

  depthFirstIn(){
    const traverse = (tree) => {
      if(tree === null) return;
      callback(tree.value);
      traverse(tree.left);
      traverse(tree.right);
    }
    traverse(this);
  }
  
  depthFirstPost(){
    const traverse = (tree) => {
      if(tree === null) return;
      callback(tree.value);
      traverse(tree.left);
      traverse(tree.right);
    }
    traverse(this);
  }

}


let binarySearchTree = new BinarySearchTree(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(1);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);

binarySearchTree.getHeight();
