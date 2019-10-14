
class Node {
    // constructor 
    constructor(element) {
        this.element = element;
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        // creates a new node 
        var node = new Node(element);

        // to store current node 
        var current;

        // if list is Empty add the 
        // element and make it head 
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the 
            // list 
            while (current.next) {
                current = current.next;
            }

            // add node 
            current.next = node;
        }
        this.size++;
    }
    insertAt(element, index) {
        if (index > 0 && index > this.size)
            return false;
        else {
            // creates a new node 
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the 
            // first index 
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find 
                // the position to insert 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element 
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element 
            if (index == 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the 
                // position to removce an element 
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element 
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element 
            return curr.element;
        }
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element == element)
                return count;
            count++;
            current = current.next;
        }

        // not found 
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }

    size_of_list() {
        console.log(this.size);
    }
    // prints the list items 
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
        return (str);
    }


}
class OrderedLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {
        var node = new Node(element);
        if (this.head == null) {
            this.head = node;
            return true;

        }
        var current = this.head;
        var prev = current;
        var c = 0;
        //console.log(this.head.element);
        // iterate over the list 

        if (element < current.element) {

            node.next = current;
            this.head = node;
            return true;
        }

        while (current.element < element) {
            if (current.next != null) {
                prev = current;
                current = current.next;
                continue;
            }
            else {
                current.next = node;
                return true;
            }
        }

        prev.next = node;
        node.next = current;
        return true;




    }


    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            // comparing element with current 
            // element if found then remove the 
            // and return true 
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;

        }
        return -1;

    }

    search(element) {
        var count = 0;
        var current = this.head;


        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element == element)
                return true;
            count++;
            current = current.next;
        }

        // not found 
        return false;
    }

    isEmpty() {
        return this.size == 0;
    }

    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list 
        while (current != null) {
            // compare each element of the list 
            // with given element 
            if (current.element == element)
                return count;
            count++;
            current = current.next;
        }

    }
    pop() {
        var current = this.head;

        while (current.next != null)
            current = current.next;

        return current.element;
    }

    pop(pos) {

        var v = this.indexOf(pos);
        this.removeElement(element);
        return (v);

    }
    printList() {
        var curr = this.head;
        var str = "-";
        while (curr) {
            str += curr.element + "->";
            curr = curr.next;
        }
        console.log(str);
        return (str);
    }


}

class Stack {
    constructor() {
        this.top = -1;
        this.arr = [];
        this.size = 0;
    }

    push(element) {
        this.arr.push(element);
        this.top++;
        this.size++;

    }

    pop() {
        if (this.top != -1) {
            var temp = this.top;
            this.top = this.top - 1;
            this.size--;
            return (this.arr[temp]);
        }
        else
            return (false);
    }

    peek() {
        return (this.arr[this.top]);
    }
    isEmpty() {
        if (this.top == -1)
            return (true);
        else
            return false;
    }

    size() {
        console.log(this.size);
    }

}

class Queue {
    constructor() {
        this.front = -1;
        this.end = -1;
        this.arr = [];
        this.size = 0;
    }

    enqueue(element) {
        if (this.size == 0) {
            this.front++;
            this.end++;
            this.arr[this.end] = element;
            this.size++;
        }
        else {
            this.end++;
            this.arr[this.end] = element;
            this.size++;
        }

    }
    dequeue() {
        if (this.end >= this.front) {
            var temp = this.front;
            this.front++;
            this.size--;
            return this.arr[temp];
        }
        else
            return false;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            return false;
    }
    size() {
        return (this.size);
    }

}

class Dequeue {
    constructor() {
        this.size = 0;
        this.front = 50;
        this.end = 50;
        this.arr = [];

    }
    addFront(item) {
        if (this.size == 0) {
            this.size++;
            this.arr[this.front] = item;
        }
        else {
            this.front--;
            this.arr[this.front] = item;
            size++;
        }


    }
    addEnd(item) {
        if (this.size == 0) {
            this.arr[this.end] = item;
            this.size++;
        }
        else {
            this.end++;
            this.arr[this.end] = item;
            this.size++;
        }

    }

    removeFront() {
        if (this.front <= this.end) {
            var temp = this.front;
            this.front++;
            this.size--;
            return (this.arr[temp]);
        }
        else false;
    }

    removeEnd() {
        if (this.front <= this.end) {
            var temp = this.end;
            this.end--;
            this.size--;
            return (this.arr[temp]);

        }
        else false;
    }
    isEmpty() {
        if (this.size == 0)
            return true;
        else
            return false;
    }

    sizeOfDq() {
        return this.size;
    }

}

class Hash {
    constructor(siz) {
        this.hashArr = [];
        for (var i = 0; i <= siz; i++) {

            this.hashArr[i] = new OrderedLinkedList();
            this.size = siz;
        }
    }

    add(element) {

        var pos = parseInt(element) % 11;
        if (!this.hashArr[pos].search(element))
            return (this.hashArr[pos].add(element));
        else
            return (false);
    }

    print(pos) {
        this.hashArr[pos].printList();
        return true;
    }

    search(element) {
        var pos = element % 11;
        return (this.hashArr[pos].search(element));

    }

    delete(element) {
        var pos = element % 11;
        return (this.hashArr[pos].removeElement(element));
    }

}
class twodArray {

    makearray(rows, col) {
        var tarray = new Array(rows);
        for (var i = 0; i < rows; i++) {
            tarray[i] = new Array(col);
            for (var k = 0; k < col; k++) {
                tarray[i][k]="";
            }


        }
        
        //console.log(tarray);
        return tarray;
    }
}



module.exports = { Node, LinkedList, OrderedLinkedList, Stack, Queue, Dequeue, Hash, twodArray }