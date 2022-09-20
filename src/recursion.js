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

export function fib(n) { // Returns Fibonacci number at position n in sequence
    return n <= 1 ? n : fib(n-1) + fib(n-2)
}

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
