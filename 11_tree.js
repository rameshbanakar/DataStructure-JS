//A tree is heirechical datastructure consist of nodes and connected by edges
//tress is non linear data structure

//root node- the node which does not have patent node is known as the root node
//leaf node- the nodes which does not have the child nodes is called the leaf nodes

//degree of node is number of child that node has is degree of node

//depth of root node is always zero
//depth means how many node is i b/w the node and root node

//height of node is how many edges in b/w bottom to that node
//leaf node height is always zero

//binery search trees
//--------------------

//binary tree is a tree datastructure in this the each node can have atmost two child nodes
//they are refered as the left child child and right child
//the value of left node of parent node must be smaller and right node value must be bigger then the parent node value

class Node {
  constructor(value) {
    (this.value = value), (this.right = null), (this.left = null);
  }
}
class tree {
  constructor() {
    this.root = null;
    this.size = 0;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNew(this.root, node);
    }
  }
  insertNew(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNew(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNew(root.right, node);
      }
    }
  }
  search(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        console.log("present");
        break;
      } else if (curr.value < value) {
        curr = curr.right;
      } else if (curr.value > value) {
        curr = curr.left;
      } else {
        console.log("value is not present");
      }
    }
  }
}
let bst = new tree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.search(15);
