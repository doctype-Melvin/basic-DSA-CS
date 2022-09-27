// const array = [211, 4, 5, 29, 57, 40, 17, 99]

export function mergeSort(arr){ // Main fn to return sorted array
    if (arr.length <= 1){ // If the passed array's length is one or less, return array
        return arr
    }
    let left = arr.splice(0, arr.length/2) // Split the array in two
    return merge(mergeSort(left), mergeSort(arr)) // Recursively call main fn inside merge fn
}

export function merge(a, b){ // Fn takes two arrays
    let result = [] 
    while(a.length > 0 && b.length > 0) { // As long as there are elements in the array 
        if (a[0] < b[0]){ // Compare the first array elements
            result.push(a.shift()) // Push to result array
        }else{
            result.push(b.shift()) // Push to result array
        }
    }
    return [...result, ...a, ...b] // Return result array but also check if there are remainders
    //and add them to the end of result array
}
