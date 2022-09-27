import { buildTree } from "./buildTree.js"
import { makeNode } from "./makeNode.js"
import { mergeSort, merge } from "./mergesort.js"
import { prettyPrint } from "./printTree.js"


const Tree = (array) => { //Module that holds all BST methods
  let root = null // Initialize root variable -- null if there's no array
  if (array) root = buildTree(array, 0, array.length - 1) // If an array is passed, create tree
  
  const insert = (key) => { // Insert new node
    let newNode = makeNode(key) // create new node
    if (root === null) root = newNode // If root is null set root to new node
    if (root !== null) insertNode(root, newNode) // if root isn't null make recursive call
    return root
  }

  function insertNode(root, node) { // Recursive fn
    if (node.key < root.key){ // If node value is less than root value
      if (root.left === null){ // If left child is null
        root.left = node // Set left node to new node
      }else{
        insertNode(root.left, node) // recurse the left branch
      }
    if (node.key > root.key){ // If node value is greater than root value
      if (root.right === null) { // If right child is null
        root.right = node // Set right node to new node
      }else{
        insertNode(root.right, node) // recurse the right branch
      }
    }
  }
}

  return {
    root,
    insert
  }
}

let a = Tree()
a.insert(3)
a.insert(4)
a.insert(1)
a.insert(13)
console.log(a.root)