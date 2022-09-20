export function countDown(n) { // Loop variant of a countdown
    let num = n;
    console.log("Loop")
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}

export function countDownRecursive(n) { // Countdown using recursion
    if (n < 0) return;
    else {
        console.log(n);
        countDownRecursive(n-1)
    }
}

export function sumRange(n, total = 0){ // Sum up range via recursion
    if (n < 0) {
        return total
    } else {
        console.log(total)
        return sumRange(n-1, total+n)
    }
}
////Fibonacci section start

export function fib(n) { // Returns Fibonacci number at position n in sequence
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}

export function fibs1(n) {
    let result = [0, 1]; // First two numbers in sequence 
    for (let i = 2; i < n; i++) {
      result[i] = (result[i-1] + result[i-2]) // Basic fibonacci formula
    }
    return result
}

export function fibs2(n) {
    let result = []; // Empty result array
    for (let i = 0; result.length < n; i++) { // Limit array length to n
        if (i > 1) { // Indices greater than 1
            result[i] = result[i-1] + result[i-2] // Will be set by fibonacci formula
        } else {
            result[i] = i // Indices 0 and 1 are equal to i
        }
    }
    return result
}

export function fibs3(n) { // Recursive
    if (n === 1) { // Base case -- if n = 1 return an array with the first two integers in sequence
        return [0, 1]
    } else {
        let temp = fibs3(n-1) // 
        temp.push(temp[temp.length-1] + temp[temp.length-2]) // Push fibonacci formula of current array
        return temp.slice(0, n) // Limit result array to n integers 
    }
}
////Fibonacci section end

export function factorial(n) { // Returns factorial of n
    return n === 1 ? n : n*factorial(n-1)
}

export function power(a, b) { // Recursive math power function
    if (b === 0) {
        return 1
    } else {
      return a * power(a, b-1)
    }
}

export function all(array, cb) { // Recursive fn to pass each array item to a callback fn
    let arr = array.slice()
    if (arr.length === 0) {
        return true;
    }
    if (cb(arr[0])){
        arr.shift()
        return all(arr, cb)
    } else {
        return false;
    }
}

export function productOfArray(array) { // Recursive call to multiply all array items
    if (array.length === 0) return 1
    
    return array.shift() * productOfArray(array)
}

//////////////////////////////
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


export function contains(obj, value) { // This fn combines the for..in loop with recursion
    for (let key in obj) { // Iterate over all the objects keys
        if (typeof obj[key] === 'object'){ // If the key's value holds an object
            return contains(obj[key], value) // use recursion to access the nested object
        }
        if (obj[key] === value) return true // If the key's value matches the value return true
    }
    return false // If there's no match return false
    }
/////////////////////////////

export function totalIntegers(array){
    if (array.length === 0) return 0; // If there are no elements return 0

    let result = 0;
    let partial = array.shift(); // store the first available element
    if (Array.isArray(partial)) { // if the element is an array
        result += totalIntegers(partial) // call again the function with the element
    } if (Number.isInteger(partial)) { // if the element is a number/integer
        result += 1 // increment result value
    }
    return result + totalIntegers(array) // calls the fn again with the partial array
    // the last partial array has a length of 0 and triggers the base case
}

export function SumSquares(val) {
    if (val.length === 0) return 0; // Base case -- if array has no elements return 0
    let result = 0;
    let partial = val.shift(); // Grabs first element of array
    if (Array.isArray(partial)) { // if first element of array is an array 
        result += SumSquares(partial) // recursively call fn with partial array and add to result
    }
    if (Number.isInteger(partial)) { // if first element of array is an integer
        result += partial*partial // add the square of integer to result
    }

    return result += SumSquares(val) // adds all recursive calls
}

export function replicate(a, b) { // Creates an array of integers -- a is being replicated b times
    if (a <= 0) return []
    return [b].concat(replicate(a-1, b))
    }