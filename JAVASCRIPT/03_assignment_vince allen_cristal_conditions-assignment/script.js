// Task 1: Grading System

let score = 90;

if (score >= 90) {
    console.log("Grade A");
} 
else if (score >= 80) {
    console.log("Grade B");
} 
else if (score >= 70) {
    console.log("Grade C");
} 
else if (score >= 60) {
    console.log("Grade D");
} 
else {
    console.log("Grade F");
}

// Task 2: Weather Advisor

let temperature = 15;

if (temperature < 0) {
    console.log("It's freezing outside! Bundle up!");
} 
else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold outside. Wear a jacket.");
} 
else if (temperature >= 16 && temperature <= 30) {
    console.log("The weather is nice. Enjoy your day!");
} 
else {
    console.log("It's hot outside. Stay hydrated!");
} 

// Task 3: Eligibility Checker
let age = 22; 

if (age < 13) {
    console.log("You are too young for this activity.");
} 
else if (age >= 13 && age <= 17) {
    console.log("You need parental permission.");
} 
else {
    console.log("You are eligible for this activity.");
}

// Task 4: Ticket Price Calculator
let personAge = 22;
let isMember = false;

if (personAge < 12) {
    console.log("Ticket is free.");
} 
else {
   if (isMember == true) {
    console.log("The ticket costs $10.")
   }
   else {
    console.log("The ticket costs $15.")
   }
} 

// Task 5: Challenge Task: Leap Year Checker
function isLeapYear(year) {
    let result;

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        result = "true";
    } 
    else {
        result = "false";
    }

    return result;
}

console.log(isLeapYear(2020));
