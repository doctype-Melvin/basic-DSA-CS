const Node = (data) => { //Fn returns obj with data, left and right property
    return {
        data,
        left: null,
        right: null
    }
}

let root = null // Variable for the root node

const arrayToBST = (arr, start, end) => { // Recursive fn to set a new node or leaf respectively
    if (start > end) return null
    let middle = parseInt((start + end) / 2)
    let newNode = Node(arr[middle])
    newNode.left = arrayToBST(arr, start, middle - 1)
    newNode.right = arrayToBST(arr, middle + 1, end)
    return newNode
}

const preOrder = (node) => { // Prints BST in preorder traversal
    if (node == null) return
    console.log(node.data + " ")
    preOrder(node.left)
    preOrder(node.right)
}

const mergeSort = (arr) => {
if (arr.length <= 1) return arr
let left = arr.splice(0, (arr.length/2))
return merge(mergeSort(left), mergeSort(arr))
}

const merge = (a, b) => {
    let result = []
while (a.length > 0 && b.length > 0){
    if (a[0] < b[0]){
        result.push(a.shift())
    }else {
        result.push(b.shift())
    }
}
return [...result, ...a, ...b]
}

const removeDupes = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index
    })
}

let arr = [14, 2, 8, 2, 2, 549, 1, 3, 17]

console.log(removeDupes(mergeSort(arr)))
// let n = arr.length
// root = arrayToBST(arr, 0, n - 1)
// console.log("Preorder traversal of constructed BST<br>")
// preOrder(root)