export function levelOrder(root) {
let queue = []
let temp = [root]
if (!root) return queue
while (temp.length !== 0){
    let current = temp.pop()
    if (current.left) temp.unshift(current.left)
    if (current.right) temp.unshift(current.right)
    queue.push(current.key)
}
return queue
}

export function BFT(root) { // Setup for recursive call
    let queue = []
    let temp = [root]
    if (!root) return queue
    else{
       return levelOrderRec(temp, queue)
    }
}

export function levelOrderRec(array, queue) { // Recursion for level order traversal
    if (array.length === 0) return queue
    if (array){
        let current = array.shift()
        if (current.left) array.push(current.left)
        if (current.right) array.push(current.right)
        queue.push(current.key)
        return levelOrderRec(array, queue)
    }
}