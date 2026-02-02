// Task 1: Multiplication Table Generator
let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Task 2: Sum of First N Natural Numbers
let n = 5;     
let sum = 0;     

for (let i = 1; i <= n; i++) {
    sum = sum + i;  
}

console.log(sum);

// Task 3: Array Elements Printer
let num =  [2, 4, 6, 8, 10];

for (let i = 0; i < num.length; i++){
  console.log("Array Element: " + num[i]);
}


// Task 4: Pattern Printer
for (let row = 1; row <= 5; row++) {
    let container = ""; 
    for (let col = 1; col <= row; col++) {
        container += "*"; 
    }

    console.log(container); 
}

//Task 5: Reverse Array Elements
let numItems =  [1, 3, 5, 7, 9];

for (let i = numItems.length - 1; i >= 0; i--){
  console.log("Array Element: " + num[i]);
}