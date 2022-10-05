// Class creates a Queue 
// Methods: enQ (enqueues element), dQ (dequeues element), front (returns first element), isEmpty (checks if there are elements),
// printQ (prints queue)
export class Queue {
    constructor(){
        this.items = []
    }

    enQ(el){
        this.items.push(el)
    }

    dQ(el) {
        if(this.isEmpty()) {
            return 'Underflow'
        }
        return this.items.shift()
    }

    front() {
        if(this.isEmpty()) {
            return 'No elements in q'
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }
    
    printQ() {
        let str = ''
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + ' '
        }
        return str
    }
}