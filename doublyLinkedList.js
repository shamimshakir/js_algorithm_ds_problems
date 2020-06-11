class Node{
	constructor(val){
		this.val = val
		this.next = null
		this.prev = null
	}
}
class DoublyLinked{

	constructor(){
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val){
		let node = new Node(val)
		if(this.length === 0){
			this.head = node
			this.tail = this.head
		}else{
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}
		this.length++
		return this
	}

	pop(){
		if(!this.head)return undefined;
		let crntTail = this.tail
		if(this.length === 1){
			this.head = null
			this.tail = null
		}else{
			this.tail = crntTail.prev
			this.tail.next = null
			crntTail.prev = null
		}

		this.length--
		return crntTail
	}

	unshift(val){
		let node = new Node(val)
		if(this.length === 0){
			this.head = node
			this.tail = this.head
		}else{
			this.head.prev = node
			node.next = this.head
			this.head = node
		}
		this.length++
		return this
	}

	shift(){
		if(this.length === 0)return undefined;
		let oldHead = this.head;
		if(this.head === 1){
			this.head = null
			this.tail = null
		}else{
			this.head = oldHead.next
			this.head.prev = null
			oldHead.next = null
		}
		this.length--
		return oldHead
	}

	get(index){
		if(index < 0 || index >= this.length)return null;

		let counter, current;
		if(index <= this.length/2){
			counter = 0;
			current = this.head
			while(counter != index){
				current = current.next
				counter++;
			}
		}else{
			counter = this.length - 1
			current = this.tail
			while(counter != index){
				current = current.prev
				counter--;
			}
		}

		return current;

	}

	set(index, value){
		let foundIndex = this.get(index)
		if(foundIndex !== null){
			foundIndex.val = value
			return true
		}
		return false
	}

	insert(index, value){
		if(index < 0 || index > this.length) return false;
		if(index === 0){
			this.unshift(value)
		}
		if(index === this.length){
			this.push(value)
		}
		let newNOde = new Node(value)
		let beforeNode = this.get(index - 1)
		let afterNode = beforeNode.next
		beforeNode.next = newNOde
		newNOde.prev = beforeNode
		newNOde.next = afterNode
		afterNode.prev = newNOde

		this.length++			
		return true
	}

	remove(index){
		if(index < 0 || index > this.length) return undefined;
		if(index === 0){
			this.shift()
		}
		if(index === this.length){
			this.pop()
		}
		let removedNode = this.get(index)
		let beforNode = removedNode.prev
		let afterNode = removedNode.next

		beforNode.next = afterNode
		afterNode.prev = beforNode

		removedNode.next = null
		removedNode.prev = null

		this.length--
		return removedNode
	}
}

let doubly = new DoublyLinked();
doubly.push(1)
doubly.push(2)
doubly.push(3)
doubly.push(4)
