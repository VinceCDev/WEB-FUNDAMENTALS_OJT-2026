/*
Submitted by: Vince Allen D. Cristal
School: LSPU - San Pablo City Campus
*/

// Task 1: Calculate the Total Cost of Items
let item1 = 20;
let item2 = 10;
let item3 = 15;

let totalCost = item1 + item2 + item3;

console.log("The total cost of the items is $" + totalCost);


// Task 2: Calculate the Average of Three Numbers
let num1 = 25;
let num2 = 26;
let num3 = 30;

let average = (num1 + num2 + num3) / 3;

console.log("The average is:", average);


// Task 3: Odd or Even Checker
let num = 15;
let remainder = num % 2; 

if (remainder == 0) {
    console.log(num + " is an even number.");
} else {
    console.log(num + " is an odd number.");
}


// Task 4: Calculate Discounts
let originalPrice = 100;
let discountPercent = 20; 

let discountAmount = (originalPrice * discountPercent) / 100; 

let finalPrice = originalPrice - discountAmount;

console.log("The discounted price is: $" + finalPrice);


// Bonus Task: Reverse Percentage Calculation 
let lastPrice = 80;
let appliedDiscount = 20;

let initialPrice = lastPrice / (1 - appliedDiscount / 100);

console.log("The original price before the discount was: $" + initialPrice);