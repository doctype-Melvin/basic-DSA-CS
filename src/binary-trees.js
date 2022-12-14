import { depth, height, isBalanced } from "./balance.js"
import { buildTree } from "./buildTree.js"
import { makeNode } from "./makeNode.js"
import { mergeSort, merge } from "./mergesort.js"
import { BFT, levelOrder, order } from "./order.js"
import { prettyPrint } from "./printTree.js"


export const Tree = (array) => { //Module that holds all BST methods
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

    function find(node, key){
        if(node === null){
        return null
      }
      if (key < node.key){
        return find(node.left, key)
      }
      if (key > node.key){
        return find(node.right, key)
      }
      return node
    }

    function getRoot(){
      return root
    }

    function reBalance(root = getRoot()){
      let arr = order('in', root)
      return Tree(arr)
    }
    
    return {
      insert,
      remove,
      find,
      getRoot,
      reBalance
  }
}

// let array = makeRandom(5)
// let a = Tree(array)
// a.insert(1)
// a.insert(3)
// a.insert(5)
// prettyPrint(a.getRoot())
// a = a.reBalance()
// prettyPrint(a.getRoot())

const times2 = (value) => value*2

function makeRandom(n){ // Creates sorted array of unique values
  let array = []
  while (array.length < n){
    let max = 666
    let min = 11
    array.push(Math.floor(Math.random()*(Math.random() * (max - min) + min)))
  }
  let sorted = mergeSort(array)
  return sorted.filter((item, index) => {
    return sorted.indexOf(item) === index
  })
}