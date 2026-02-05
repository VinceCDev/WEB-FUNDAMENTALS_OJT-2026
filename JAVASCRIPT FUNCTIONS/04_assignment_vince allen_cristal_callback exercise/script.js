// Exercise 1: Writing Your First Callback Function
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) return "Error: Cannot divide by zero";
    return a / b;
}

console.log(calculate(10, 4, subtract)); 
console.log(calculate(20, 0, divide));  

// Exercise 2: Using Callbacks with setTimeout
function delayedMessage(message, delay, startCallback, endCallback) {
    startCallback(); 
    setTimeout(() => {
        endCallback(message);
    }, delay);
}

delayedMessage(
    "Time is up!",       
    2000,               

    function() {
        console.log("Timer started... please wait.");
    },

    function(msg) {
        console.log(msg);
    }
);


// Exercise 3: Looping with Callbacks
function repeatTask(times, callback) {
    for (let i = 0; i < times; i++) {
        let shouldContinue = callback(i);

        if (shouldContinue === false) {
            console.log("Stopped early at index:", i);
            break; 
        }
    }
}

repeatTask(8, function(index) {
    console.log("Processing item:", index);
    
    if (index === 3) {
        return false; 
    }
    return true;
});