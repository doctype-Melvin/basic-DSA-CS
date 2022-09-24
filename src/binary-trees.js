const Tree = () => {

    function makeNode(key, left = null, right = null) {
      return {
        key,
        left,
        right
      }
    }

    function buildTree(array, start, end){
      if (start > end) return null
      let mid = parseInt((start + end) / 2)
      let node = makeNode(array[mid]) 
      node.left = buildTree(array, start, mid - 1)
      node.right = buildTree(array, mid + 1, end)
      return node
    }
    
    let root = null

    function insert(key) {
      let newNode = makeNode(key)

      if (root === null){
        root = newNode
      }else{
        insertNode(root, newNode)
      }
      return root
    }

    function insertNode(node, newNode){
      if (newNode.key < node.key){
        if (node.left === null){
          node.left = newNode
        }else insertNode(node.left, newNode)
    }
      if (newNode.key > node.key){
        if (node.right === null) {
          node.right = newNode
        }else insertNode(node.right, newNode)
      }
  }

    function prettyPrint(node, prefix = "", isLeft = true) {
        if(node === null) return
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false)
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.key}`)
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true)
        }
      }

    return {
        makeNode,
        buildTree,
        prettyPrint,
        insert     
    }
}

let bst = Tree()


function randomArray(length){
  let array = []
  while (array.length < length) {
    array.push(Math.floor(Math.random() * 667))
  }
  return array
}