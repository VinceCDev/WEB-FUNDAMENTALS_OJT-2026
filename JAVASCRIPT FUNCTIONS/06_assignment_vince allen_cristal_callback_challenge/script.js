// Task 1: Custom Map Function
function customMap(arr, callback) {
    let transformedArray = [];
    for (let i = 0; i < arr.length; i++) {
        transformedArray.push(callback(arr[i]));
    }
    return transformedArray;
}

let numbers = [1, 2, 3];
let doubled = customMap(numbers, function(num) { return num * 2; });
console.log(doubled);

// Task 2: Filter Function
function filter(arr, callback) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

let resultFilter = filter([1, 2, 3, 4, 15], function(val) { return val < 10; });
console.log(resultFilter);

// Task 3: Some Function
function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true; 
        }
    }
    return false;
}

let resultSome = some([1, 2, 3, 4], function(val) { return val > 5; });
console.log(resultSome); 


// Task 4: Every Function 
function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false; 
        }
    }
    return true; 
}

let resultEvery = every([1, 2, 3], function(val) { return val > 0; });
console.log(resultEvery);

// Task 5: Reduce Function
function reduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }
    return accumulator;
}

let sum = reduce([1, 2, 3], function(acc, num) { return acc + num; });
console.log(sum); 


// Task 6: Includes Check
function includes(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
}

let resultIncludes = includes([1, 2, 3], function(val) { return val === 2; });
console.log("Includes Result:", resultIncludes);