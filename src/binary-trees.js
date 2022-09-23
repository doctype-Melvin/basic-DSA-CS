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

//Final sorted array without dupes
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

    const insertNode = (root, value) => {
        if (root === null) {
            root = Node(value)
            console.log(root)
            return root
        }
        if (value < root.data) {
            root.left = insertNode(root.left, value)
        } else if (value > root.data) {
            root.right = insertNode(root.right, value)
        }
        return root
    }
    return {
        Node,
        root,
        prettyPrint,
        search,
        insertNode
    }
}

let fristTree = Tree(polishedArray([]))
//console.log(fristTree.root)
//console.log(fristTree.search(fristTree.root, 54))
console.log(fristTree)
console.log(fristTree.root)
console.log(fristTree.insertNode(fristTree.root, 1233))
console.log(fristTree.insertNode(fristTree.root, 4))
console.log(fristTree.root)
console.log(fristTree)
// console.log(fristTree.prettyPrint(fristTree.root))