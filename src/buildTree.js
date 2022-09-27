import { makeNode } from "./makeNode.js"

export function buildTree(array, start, end){
    if (start > end) return null
    let mid = parseInt((start + end) / 2)
    let newNode = makeNode(array[mid])
    newNode.left = buildTree(array, start, mid - 1)
    newNode.right = buildTree(array, mid + 1, end)
    return newNode
}