class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}
class SLL {
    constructor(){
        this.head = null
    }
    addFront(val){
        let new_node = new Node(val)
        if(!this.head){
            this.head = new_node
            return this
        }
        new_node.next = this.head
        this.head = new_node
        return this
    }
    removeFront(){
        if(this.head == null){
            return this.head
        }
        let remNode = this.head // var holds node we want to delete
        this.head = remNode.next // moves head to next node leaving old head stranded
        remNode.next = null // set stranded node to null to unchain from list
        return this.head
    }
    front(){
        if(this.head == null){
            return this.head
        } else {
            return this.head.value
        }
    }

    display(){
        var liststr = ''
        if(this.head == null){
            return null
        }
        liststr += this.head.value
        var runner = this.head.next
        while(runner != null){
            liststr += ', ' + runner.value
            runner = runner.next
        }
        return liststr
    }
}

list1 = new SLL()
list1.addFront(18)
list1.addFront(5)
list1.addFront(73)

console.log(list1.display())

console.log(list1)
// list1.removeFront()

// console.log(list1.front())