//A linked list is a linear data structure it containes the series of connected nodes each node containes the value and pointer to the next node
//the linked list elements can removed easily without reorganising and resrtructuring

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        if (curr.next === null) {
          break;
        }
        curr = curr.next;
      }
      curr.next = node;
      this.size++;
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    } else {
      if (index === 0) {
        this.prepend(value);
      } else {
        let pre = this.head;
        for (let i = 0; i < index - 1; i++) {
          pre = pre.next;
        }
        let node = new Node(value);
        node.next = pre.next;
        pre.next = node;
        this.size++;
      }
    }
  }
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let pre = this.head;
      for (let i = 0; i < index - 1; i++) {
        pre = pre.next;
      }
      pre.next = pre.next.next;
    }
    this.size--;
  }
  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      if (this.head.value === value) {
        this.head = this.head.next;
      } else {
        let pre = this.head;
        for (let i = 0; i < this.size; i++) {
          if (pre.next.value === value) {
            pre.next = pre.next.next;
            break;
          }
        }
      }
      this.size--;
    }
  }
  search(value){
    if (this.isEmpty()) {
      return -1
    }else{
      let i=0
      curr=this.head
      while(curr){
        if(curr.value=value){
          return i
        }
        curr=curr.next
        i++
      }
      return -1
    }
  }
     
  
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
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
const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.prepend(10);
list.print();
list.prepend(20);

list.prepend(30);
list.print();
list.append(90);
list.print();
list.insert(45, 3);
list.print();
list.removeFrom(2);
list.print();
list.removeValue(20);
list.print();
