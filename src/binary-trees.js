const Node = (data, left, right) => {
    return {
        data,
        left: null,
        right: null
    }
}

let root = null

const arrayToBST = (arr, start, end) => {
    if (start > end) return null
    let middle = parseInt((start + end) / 2)
    let newNode = Node(arr[middle])
    newNode.left = arrayToBST(arr, start, middle - 1)
    newNode.right = arrayToBST(arr, middle + 1, end)
    return newNode
}

const preOrder = (node) => {
    if (node == null) return
    console.log(node.data + " ")
    preOrder(node.left)
    preOrder(node.right)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n = arr.length
root = arrayToBST(arr, 0, n - 1)
console.log("Preorder traversal of constructed BST<br>")
preOrder(root)