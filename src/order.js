export function levelOrder(root, cb) { // Level order traversal in iterative fashion
let queue = []
let temp = [root]
if (!root) return queue
while (temp.length !== 0){ // While the working array is not empty
    let current = temp.pop() // Sets current node to first element of working array
    if (current.left) temp.unshift(current.left)
    if (current.right) temp.unshift(current.right)
    if (!cb) {
        queue.push(current.key)
    }else {// Optional callback condition
        queue.push(cb(current.key))
    }
}
return queue
}

export function BFT(root, cb) { // Setup for recursive call -- level order traversal
    let queue = []
    let temp = [root] // Array holds the root and keeps track of children -- working array
    if (!root) return queue
    else if(cb){ // Optional callback condition
        return (levelOrderRec(temp, queue)).map(item => cb(item))
    }
    else{
       return levelOrderRec(temp, queue)
    }
}

export function levelOrderRec(array, queue) { // Recursion for level order traversal
    if (array.length === 0) return queue
    if (array){
        let current = array.shift() // Sets current node to first element of working array
        if (current.left) array.push(current.left)
        if (current.right) array.push(current.right)
        queue.push(current.key)
        return levelOrderRec(array, queue)
    }
}

export function order(dir, node, cb){
    let order = []
    if (!node || !dir) return
    else if (cb) {
        return orderRec(dir, node, order).map(item => cb(item))
    }else{
        return orderRec(dir, node, order)
    }
}

function orderRec(dir, node, array){
    if (dir === 'in') {
        if (!node) return
        if (node) {
            orderRec(dir, node.left, array)
            array.push(node.key)
            orderRec(dir, node.right, array)
        }
    }else if (dir === 'pre') {
        if (node) {
            array.push(node.key)
            orderRec(dir, node.left, array)
            orderRec(dir, node.right, array)
        }
    }else if (dir === 'post') {
        if (node) {
            orderRec(dir, node.left, array)
            orderRec(dir, node.right, array)
            array.push(node.key)
        }
    }
    return array
}