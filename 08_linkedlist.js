//A linked list is a linear data structure it containes the series of connected nodes each node containes the value and pointer to the next node
//the linked list elements can removed easily without reorganising and resrtructuring

class Node{
    constructor(value){
        this.value=value
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size;
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        }else{
            let curr=this.head
            let val=""
            while(curr){
                val+=`${curr.value}-->`
                curr=curr.next
            }
            console.log(val)
        }
    }
}
const list=new LinkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.print();
list.prepend(10)
list.print();
list.prepend(20)

list.prepend(30)
list.print()