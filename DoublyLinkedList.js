class _Node {
  constructor(prev,value, next) {
    this.value = value;
    this.next = next;
    this.prev=prev;
  }
}

class DoublyLL{

  constructor(){
    this.head=null;
    this.tail=null;
  }

  _connectNodes(node1,node2){
    if(node1!==null){
      node1.next=node2;
    }
    if(node2!==null){
      node2.prev=node1;
    }
  }

  insertFirst(item){
    this.head=new _Node(null,item,this.head);
    this._connectNodes(this.head,this.head.next);
    if(this.head.next===null){
      this.tail=this.head;
    }
  }

  insertLast(item){
    this.tail=new _Node(this.tail,item,null);
    this._connectNodes(this.tail.prev,this.tail);
    if(this.tail.prev===null){
      this.tail=this.head;
    }
  }

  insertBefore(item,key){
    if (this.head === null) {
      console.log('item with the provided value not found');
      return false;
    }
    if (this.head.value === key) {
      this.insertFirst(item);
      return true;
    }
    let tempNode = this.head;
    while (tempNode.next !== null) {
      if (tempNode.next.value === key) {
        const newNode= new _Node(tempNode,item, tempNode.next);
        this._connectNodes(newNode,tempNode.next);
        this._connectNodes(tempNode,newNode);
        return true;
      }
      tempNode = tempNode.next;
    }
    console.log('item with the provided value not found');
    return false;
  }

  insertAfter(item,key){
    if (this.head === null) {
      console.log('item with the provided value not found');
      return false;
    }
    let tempNode = this.head;
   
    while (tempNode !== null) {
      if (tempNode.value === key) {
        const newNode= new _Node(tempNode,item, tempNode.next);
        if(tempNode===this.tail){
          this.tail=newNode;
        }
        this._connectNodes(newNode,tempNode.next);
        this._connectNodes(tempNode,newNode);
        
        return true;
      }
      tempNode = tempNode.next;
    }
    console.log('item with the provided value not found');
    return false;
  }

  insertAt(item,pos){
    if (pos === 0) {
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    for (let i = 1; i <pos; i++) {
      if (tempNode.next === null) {
        throw new Error('out of bounds');
      }
      tempNode = tempNode.next;
    }
    let nextNode=tempNode.next;
    const newNode= new _Node(tempNode,item,nextNode);
    if(tempNode===this.tail){
      this.tail=newNode;
    }
    this._connectNodes(newNode,nextNode);
    this._connectNodes(tempNode,newNode);
  }

  remove(item){
    let temp=this.head;
    while(temp!==null){
      if(temp.value===item){
        this._connectNodes(temp.prev,temp.next);
        return true;
      }
      temp=temp.next;
    }
    return false;

  }

  find(item){
    let temp=this.head;
    while(temp!==null){
      if(temp.value===item){
        return temp;
      }
      temp=temp.next;
    }
    return null;
  }

  rev(){

  }

}

function display(list) {
  let str = '';
  let tempNode = list.head;
  while (tempNode !== null) {
    str = str + tempNode.value + ' ';
    tempNode = tempNode.next;
  }
  console.log(str);
}

function size(list) {
  let num = 0;
  let tempNode = list.head;
  while (tempNode !== null) {
    num++;
    tempNode = tempNode.next;
  }
  return num;
}

function displayBackwards(list){
  let str = '';
  let tempNode = list.tail;
  while (tempNode !== null) {
    str = str + tempNode.value + ' ';
    tempNode = tempNode.prev;
  }
  console.log(str);
}

function revDLL(list){
  let temp=list.head;
  list.head=list.tail;
  list.tail=temp;

  //now need to switch next and prev for everyone.
  while(temp!==null){
    let nextNode=temp.next;
    temp.next=temp.prev;
    temp.prev=nextNode;
    temp=nextNode;
  }
}

function main(){
  let list= new DoublyLL();
  list.insertFirst('a');
  list.insertLast('b');
  
  list.insertFirst('0');
  list.insertLast('d');
  list.insertAfter('c','b');
  list.insertAfter('e','d');
  display(list);
  displayBackwards(list);
  list.insertBefore('-1','0');
  list.insertAt('-2',0);
  
  list.insertAt('5',size(list)-1);
  list.insertAt('5',size(list));

  display(list);
  displayBackwards(list);
  list.remove('g');
  list.remove('a');
  display(list);
  displayBackwards(list);
  revDLL(list);
  display(list);
  displayBackwards(list);
}
main();