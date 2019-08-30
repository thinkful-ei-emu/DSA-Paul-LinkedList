class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
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
        tempNode.next = new _Node(item, tempNode.next);
        return true;
      }
      tempNode = tempNode.next;
    }
    console.log('item with the provided value not found');
    return false;
  }

  insertAfter(item, key) {
    let tempNode = this.head;
    if (tempNode === null) {
      return false;
    }
    while (tempNode !== null) {
      if (tempNode.value === key) {
        tempNode.next = new _Node(item, tempNode.next);
        return true;
      }
      tempNode = tempNode.next;
    }
    console.log('item with the provided value not found');
    return false;
  }

  insertAt(item, pos) {
    if (pos === 0) {
      this.insertFirst(item);
      return;
    }
    let tempNode = this.head;
    for (let i = 1; i < pos; i++) {
      if (tempNode.next === null) {
        throw new Error('out of bounds');
      }
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, tempNode.next);
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item 
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking 
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
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
  let len = 0;
  let tempNode = list.head;
  while (tempNode !== null) {
    tempNode = tempNode.next;
    len++;
  }
  return len;
}

function isEmpty(list) {
  if (list.head === null) return true;
  return false;
}

function findPrevious(list, item) {
  let tempNode = list.head;
  if (tempNode === null) {
    return null;
  }
  while (tempNode.next !== null) {
    if (tempNode.next.value === item) {
      return tempNode;
    }
    tempNode = tempNode.next;
  }
  return null;
}

function findLast(list) {
  let tempNode = list.head;
  if (tempNode === null) {
    return null;
  }
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode;
}

function revList(list){
  if(list.head===null) return;
  let prevNode=list.head;
  let currNode=list.head.next;
  prevNode.next=null;
  while(currNode!==null){
    let nextNode=currNode.next;
    currNode.next=prevNode;
    let tempNode=prevNode;
    prevNode=currNode;
    currNode=nextNode;
    if(currNode===null){
      list.head=prevNode;
    }
  }
}

function revListRec(ll,prev,current){
  if(current===null){
    ll.head=prev;
    return;
  }
  revListRec(ll,current,current.next);
  current.next=prev;
}

function test(){
  let list=new LinkedList();
  list.insertLast('a');
  list.insertLast('b');
  list.insertLast('c');
  list.insertLast('d');
  list.insertLast('e');
  display(list);
  revListRec(list,null,list.head);
  display(list);
}
test();


function thirdFromEnd(list){
  let nthFromEnd=3;
  if(size(list)<nthFromEnd){
    console.log('list not big enough');
    return null;
  }
  let currNode=list.head;
  while(currNode!==null){
    let tempNode=currNode;
    for(let i=0;i<nthFromEnd;i++){
      tempNode=tempNode.next;
      if(i===(nthFromEnd-1) &&tempNode===null)
        return currNode;
    }
    
    currNode=currNode.next;
  }
}

function middleOfList(list){
  if(list.head===null){
    return null;
  }
  if(list.head.next===null){
    return list.head;
  }
  let singleJumpNode=list.head;
  let doubleJumpNode=list.head.next;
  while(doubleJumpNode.next!==null){
    singleJumpNode=singleJumpNode.next;
    doubleJumpNode=doubleJumpNode.next.next;
    if(doubleJumpNode===null){
      return singleJumpNode;
    }
  }
  return singleJumpNode;
}


function findCycle(list){
  return;
}

function displayFirstTwenty(list){
  let str = '';
  let tempNode = list.head;
  let i=0;
  while (tempNode !== null && i<20) {
    str = str + tempNode.value + ' ';
    tempNode = tempNode.next;
    i++;
  }
  console.log(str);
}

//easy to mathematically prove that once singleJumpNode (SJN) enters
//the loop, it isn't more than (length of the loop) jumps 
//until the doubleJumpNode and SJN collide. So O(N), if N is the number of distinct nodes (can be same values but still be distinct) in the list.
function isCycle(list){
  if(list.head===null) return false;
  if(list.head.next===null) return false;
  let singleJumpNode=list.head;
  let doubleJumpNode=list.head.next;
  while(doubleJumpNode.next!==null){
    if(singleJumpNode===doubleJumpNode){
      return true;
    }
    singleJumpNode=singleJumpNode.next;
    doubleJumpNode=doubleJumpNode.next.next;
    if(doubleJumpNode===null){
      return false;
    }
  }
  return false;
}

function main() {
  const list = new LinkedList();
  console.log(isEmpty(list));
  console.log(size(list));
  console.log(findPrevious(list, 'blah'));
  console.log(findLast(list));
  list.insertLast('Apollo');
  list.insertLast('Boomer');
  list.insertLast('Halo');
  list.insertLast('Husker');
  list.insertLast('Starbuck');
  list.insertLast('Tauhida');
  list.insertBefore('beforeTauhida','Tauhida');
  list.insertAfter('afterHusker','Husker');
  list.insertAt('last',8);
  display(list);
  list.remove('squirrel');
  display(list);
  list.insertBefore('Athena', 'Boomer');
  display(list);
  list.insertAfter('Hotdog', 'Helo');
  display(list);
  list.insertAfter('Hotdog', 'Halo');
  display(list);
  list.insertAt('Kat', 2);
  display(list);
  list.remove('Tauhida');
  display(list);
  console.log(size(list));
  console.log(isEmpty(list));
  revList(list);
  console.log(list);
  display(list);
  console.log(thirdFromEnd(list));
  console.log(middleOfList(list));
  let cycleList= new LinkedList();
  cycleList.head= new _Node(0,null);
  cycleList.head.next= new _Node(1,null);
  cycleList.head.next.next= new _Node(2,null);
  cycleList.head.next.next.next= new _Node(3,null);
  cycleList.head.next.next.next.next= new _Node(4,null);
  cycleList.head.next.next.next.next.next= new _Node(5,null);
  cycleList.head.next.next.next.next.next.next= cycleList.head.next.next.next;
  displayFirstTwenty(cycleList);
  console.log(`Is this cycleList a cycle? ${isCycle(cycleList)}`);
  console.log(`Is this list a cycle? ${isCycle(list)}`);
}
main();




function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
//at each node, we look at all nodes further down, and if they are the same, we get rid of the later nodes.
//At worst case, where no later nodes get removed at any point
//When current is HEAD, we have to call newNode.next, linkedlist.length -1 many times.
//When current is HEAD.next, we have to call newNode.next, linkedlist.length -2 many times.
//When current is HEAD.next.next, we have to call newNode.next, linkedlist.length -3 many times.
//So on and so forth, which is N-1 + N-2 + N-3+ ... +3+ 2+ 1 operations, so it's O(N^2)
//better way: if all values are strings, go through the linkedlist and for each node, add its value to a hash object as a key with value true. And for each node if the the node's value is already present in the hash object, we kill it/remove it from the chain.
