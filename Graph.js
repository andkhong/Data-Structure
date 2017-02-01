class Graph {
  constructor(value){
    this.value = value;
    this.edges = [];
  }

  add(value){
    let newGraph = new Graph(value);
    this.edges.push(newGraph);
  }

  contains(value){
    let stack = [this];
    while(stack.length > 0){
      let node = stack.pop();
      if(node.value === value) return true;
      else {
        for(let i = 0; i < node.edges.length; i++){
          stack.push(node.edges[i]);
        }
      }
    }
    return false;
  }

}
