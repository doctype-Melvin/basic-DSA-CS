export function levelOrder(root, cb) {
let queue = []
let temp = [root]
if (!root) return queue
while (temp.length !== 0){
    let current = temp.pop()
    if (current.left) temp.unshift(current.left)
    if (current.right) temp.unshift(current.right)
    if (!cb) {
        queue.push(current.key)
    }else {
        queue.push(cb(current.key))
    }
}
return queue
}

export function BFT(root, cb) { // Setup for recursive call
    let queue = []
    let temp = [root]
    if (!root) return queue
    else if(cb){
        return (levelOrderRec(temp, queue)).map(item => cb(item))
    }
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