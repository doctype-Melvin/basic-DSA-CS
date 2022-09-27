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
    }else{
      insertNode(root, newNode)
    }
  }

  function insertNode(root, newNode){
    if (newNode.key < root.key) {
      if (root.left === null) {
        root.left = newNode
      }else{
        insertNode(root.left, newNode)
      }
    }
    if (newNode.key > root.key) {
      if (root.right === null) {
        root.right = newNode
      }else{
        insertNode(root.right, newNode)
      }
    }
  }

  function remove(key){
    root = removeNode(root, key)
  }

  function removeNode(root, key) {
    if (root === null) return null
    if (key < root.key) { // Move left if key is less than root key
      root.left = removeNode(root.left, key)
      return root
    }
    if (key > root.key) { // Move right if key is greater than root key
      root.right = removeNode(root.right, key)
      return root
    }
    if (root.left === null && root.right === null) { // Both children are null -- no children
      root = null
      return root
    }
    if (root.left === null) { // node has one child to the right
      root = root.right
      return root
    }
    if (root.right === null) { // node has one child to the left
      root = root.left
      return root
    }
    let aux = minNode(root.right) // Something with two children minimum node of right subtree
    root.key = aux.key

    root.right = removeNode(root.right, aux.key)
    return root
  }

    function minNode(root){
      if (root.left === null) {
        return root
      }else return minNode(root.left)
    }
  
  return {
    get root(){return root},
    insert,
    remove
  }
}

let a = Tree()
a.insert(8)
a.insert(10)
a.insert(7)
a.remove(8)
console.log(a.root)
console.log(prettyPrint(a.root))