class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /* Pushing New Item */
    push(val) {
        var node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    /* Pop item from the end */
    pop() {
        if (!this.head)
            return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current;
    }

    /* Shift item in beginning */
    shift() {
        if (!this.head)
            return undefined;
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    /* Unshift Item in the begining */
    unshift(val) {
        let node = new Node(val)
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++;
        return this
    }

    /* Getting  Item From LIst */
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    /* Update VAlue | Set Value */
    set(index, value) {
        let foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = value
            return true;
        }
        return false
    }

    /* Insert Item in List */
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === 0)
            return this.unshift(value)
        if (index === this.length)
            return this.push(value)

        let node = new Node(value)
        let prev = this.get(index - 1)
        let temp = prev.next;
        prev.next = node;
        node.next = temp;
        this.length++
        return true;
    }

    /* Remove Item from list */
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let prev = this.get(index - 1)
        let removed = prev.next
        prev.next = removed.next
        this.length--;
        return removed
    }

    /* Reverse Linked List */
    reverse(){
        var nodeNew = this.head
        this.head = this.tail
        this.tail = nodeNew

        var next;
        var prev = null;

        for(let i = 0; i < 1; i++){
            next = nodeNew.next
            nodeNew.next = prev
            prev = nodeNew
            nodeNew = next
        }
        return this
    }
}
let list = new SinglyList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
