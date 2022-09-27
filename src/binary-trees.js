import { buildTree } from "./buildTree.js"
import { mergeSort, merge } from "./mergesort.js"
import { prettyPrint } from "./printTree.js"


const Tree = (array) => { //Module that holds all BST methods
  let root = null
  if (array) root = buildTree(array, 0, array.length - 1)
  

  return {
    root
  }
}

let a = Tree([1, 3, 5, 6, 7, 8])
console.log(prettyPrint(a.root))