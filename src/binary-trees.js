const Tree = (array) => {
    
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
        prettyPrint        
    }
}