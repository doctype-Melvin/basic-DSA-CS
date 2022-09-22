// This program will create a balanced binary search tree
// Functions created:
// Node -- factory fn to create nodes
// Tree -- factory fn to create root nodes
// buildTree -- fn that turns array into balanced binary tree and returns level 0 root node 
// prettyPring -- fn that visualizes binary search tree
// insert and delete -- methods to insert and delete nodes
// find -- method to find a given value
// levelOrder -- method to traverse the tree in breadth-first level order
// order -- should traverse the tree in depth-first order (inorder, preorder, postorder)
// height -- should return the height of a given node
// depth -- should return the depth of a given node
// isBalanced -- balance check of tree where heights of branches do not differ more than 1
// rebalance -- uses traversal to rebalance an unbalanced tree

// Array creation and organisation

//MergeSort fn as repitition of previous lessons
// input === array
const MergeSort = (input) => {
if (input.length <= 1) return input
let left = input.splice(0, (input.length/2))
return Merge(MergeSort(left), MergeSort(input))
}

const Merge = (a, b) => {
let result = []
while (a.length > 0 && b.length > 0){
    if (a[0] < b[0]){
        result.push(a.shift())
    }else{
        result.push(b.shift())
    }
}
return [...result, ...a, ...b]
}

// Remove duplicates
const cleanArray = (input) => {
    return input.filter((item, index) => {
        return input.indexOf(item) === index
    })
}

function polishedArray(arr){
    return MergeSort(cleanArray(arr))
}

// Tree module that holds all methods and fn
const Tree = (array) => {

        // Node factory
    const Node = (data) => {
        return {
            data,
            left: null,
            right: null
        }
    }

        //buildTree fn
    const buildTree = (arr, start, end) => {
        if(start > end) return null
        let middle = parseInt((start + end) / 2)
        let newNode = Node(arr[middle])
        newNode.left = buildTree(arr, start, middle - 1)
        newNode.right = buildTree(arr, middle + 1, end)
        return newNode
    }

    let root = buildTree(array, 0, array.length - 1)
        
    // Pretty print - visual representation of the tree in console
    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node.right !== null) {
            prettyPrint(node.right, `${prefix}${isLeft ? "|  " : "   "}`, false)
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`)
        if (node.left !== null) {
            prettyPrint(node.left, `${prefix}${isLeft ? "   " : "|  "}`, true)
        }
    }

    // Search a value
    const search = (root, value) => {
        if (root === null || root.data === value) return root
        if (root.data < value) return search(root.right, value)
        return search(root.left, value)
    }
    return {
        root,
        prettyPrint,
        search
    }
}

let fristTree = Tree(polishedArray([1, 54, 4, 3, 2, 19]))
console.log(fristTree.prettyPrint(fristTree.root))