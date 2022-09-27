import { buildTree } from "./buildTree.js"
import { makeNode } from "./makeNode.js"
import { mergeSort, merge } from "./mergesort.js"
import { prettyPrint } from "./printTree.js"


const Tree = (array) => { //Module that holds all BST methods
  let root = null // Initialize root variable -- null if there's no array
  if (array) root = buildTree(array, 0, array.length - 1) // If an array is passed, create tree
  
  function insert(key){
    let newNode = makeNode(key)
    if (root === null) {
      root = newNode
    }else {
      insertNode(root, newNode)
    }

  function insertNode(root, newNode){
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode
      }else {
        insertNode(root.left, newNode)
      }
    }
    if (newNode.key > root.key) {
      if (root.right === null) {
        root.right = newNode
      }else {
        insertNode(root.right, newNode)
      }
    }
  }
  }
  return {
    get value(){return root},
    insert
  }
}

let a = Tree()
console.log(a.insert(8))
console.log(a.value())

