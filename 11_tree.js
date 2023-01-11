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


class Node{
    constructor(value){
        this.value=value,
        this.right=null,
        this.left=null
    }
}
class tree{
    constructor(){
        this.root=null
        this.size=0
    }
    isEmpty(){
        return this.root===null
    }
}
let bst=new tree()
console.log(bst.isEmpty())