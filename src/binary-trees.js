const Tree = (array) => {
  let root = null

  if(array) root = buildTree(array, 0, array.length-1)

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

    function remove(key){
      root = removeNode(root, key)
    }

    function removeNode(node, key){
      if (node === null) return null
      if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
      }
      if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
      }
      if (node.left === null && node.right === null){
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      let aux = findMinNode(node.right)
      node.key = aux.key

      node.right = removeNode(node.right, aux.key)
      return node
    }

    function inorder(node){
      if (node !== null)
      {
        inorder(node.left)
        console.log(node.key)
        inorder(node.right)
      }
    }

    function preorder(node){
      if (node !== null){
        console.log(node.key)
        preorder(node.left)
        preorder(node.right)
      }
    }

    function postorder(node){
      if (node !== null) {
        postorder(node.left)
        postorder(node.right)
        console.log(node.key)
      }
    }

    function findMinNode(node){
      if (node.left === null){
        return node
      }else{
        return findMinNode(node.left)
      }
    }

    function getRootNode(){
      return root
    }

    function search(node, key) {
      if (node === null){
        return null
      }else if (key < node.key){
        return search(node.left, key)
      }else if (key > node.key){
        return search(node.right, key)
      }
      return node
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
        insert,
        remove,
        inorder,
        preorder,
        postorder,
        findMinNode,
        getRootNode,
        search
    }
}

let bst = Tree([1, 2, 3, 4])
bst.insert(5)
bst.remove(3)
console.log(bst.prettyPrint(bst.getRootNode()))


function randomArray(length){
  let array = []
  while (array.length < length) {
    array.push(Math.floor(Math.random() * 667))
  }
  return array
}