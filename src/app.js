import { linkedList } from "./linkedList.js"

const linkedListApp = (() => {
    // Linked List form controls and graphic output
        //Buttons
    const headBtn = document.getElementById('setHead')
    const appendBtn = document.getElementById('push')
    const prependBtn = document.getElementById('unshift')
    const indexBtn = document.getElementById('index')
    const containsBtn = document.getElementById('hasNum')
    const sizeBtn = document.getElementById('size')
    const printHeadBtn = document.getElementById('printHead')
    const tailBtn = document.getElementById('tail')
    const popBtn = document.getElementById('pop')
    const printBtn = document.getElementById('printList')

        //Input fields
    const head = document.getElementById('head')
    const append = document.getElementById('append')
    const prepend = document.getElementById('prepend')
    const atIndex = document.getElementById('atIndex')
    const contains = document.getElementById('contains')

        //Output section
    const listOutput = document.getElementById('listOutput')

        //App logic
    let list = linkedList() // Initialize new linkedList instance
    headBtn.addEventListener('click', () => {
        if (!head.value) {
            listOutput.textContent = 'Please enter a number'
        }
    })

})()

const binarySearchTreeApp = (() => {
    console.log('bst')
})()