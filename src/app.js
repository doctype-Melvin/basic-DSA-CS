import { linkedList } from "./linkedList.js"

const linkedListApp = (() => {
    // Linked List form controls and graphic output
        //Buttons
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
    const append = document.getElementById('append')
    const prepend = document.getElementById('prepend')
    const atIndex = document.getElementById('atIndex')
    const contains = document.getElementById('contains')
        //Form element -- empty input elements on load
    const listForm = document.getElementById('listForm')
    listForm.reset()
        //Output section
    const listOutput = document.getElementById('listOutput')

        //App logic
    let list = linkedList() // Initialize new linkedList instance
    
    appendBtn.addEventListener('click', () => {
        if (!append.value) {
            listOutput.textContent = 'Please enter a valid value'
        }else if(append.value){
            list.append(append.value)
            listOutput.textContent = list.toString()
            listForm.reset()       
        }
    })

    prependBtn.addEventListener('click', () => {
        if (!prepend.value) {
            listOutput.textContent = 'Please enter a valid value'
        }else if (prepend.value){
            list.prepend(prepend.value)
            listOutput.textContent = list.toString()
            listForm.reset()
        }
    })

    const testDiv = document.createElement('div')
    testDiv.textContent = 'Test Test'

    atIndex.addEventListener('click', () => {
        if (!atIndex.value) {
            listOutput.textContent = 'Please enter a valid value'
        }else {
        //    let listPrint = list.toString()
        //    let node = list.atIndex(atIndex.value).value
        //    console.log(output)
        //    listOutput.textContent = output
        listOutput.textContent = list.toString()
        listOutput.append(testDiv)
           listForm.reset() 
        }
    })
})()

const binarySearchTreeApp = (() => {
    console.log('bst')
})()