//doubly linked list
class Node {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}
class doublyLinked {
  constructor() {
    this.head = null;
    this.tail=null
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail=node
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++
  }
  reverse(){
      if(this.isEmpty()){
        console.log("empty list to reverse")
      }else{
        let curr=this.tail
        let val =""
        while(curr){
          val+=`${curr.value}-->`
          curr=curr.prev
        }
        console.log(val)
      }
  }
  print() {
    if (this.isEmpty()) {
      console.log("no data in list");
    } else {
      let curr = this.head;
      let val = "";
      while (curr) {
        val += `${curr.value}-->`;
        curr = curr.next;
      }
      console.log(val);
    }
  }
}
const l = new doublyLinked();
console.log(l.getSize());
l.prepend(10);
l.print();
console.log(l.getSize());
l.prepend(20);
l.print();
l.reverse()
