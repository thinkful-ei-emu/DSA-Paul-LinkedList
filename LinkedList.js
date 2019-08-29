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
    while (tempNode.next !== null) {
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
//