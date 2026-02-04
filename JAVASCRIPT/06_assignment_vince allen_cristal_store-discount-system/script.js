let customer_type = "member";
let purchase_amount = 200;
let discount = 0;

if (customer_type == "member" && purchase_amount >= 1000){
    discount = 0.20;
} else if (customer_type == "member" && (purchase_amount >= 500 && purchase_amount <= 999)){
    discount = 0.10;
} else if (customer_type == "member" && purchase_amount < 500){
    discount = 0.05;
} else if (customer_type == "non-member" && purchase_amount >= 1000){
    discount = 0.10;
} else if (customer_type == "non-member" && (purchase_amount >= 500 && purchase_amount <= 999)){
    discount = 0.05;
} else {
    discount = 0;
}

let discountPrice = purchase_amount * discount;
let finalPrice = purchase_amount - discountPrice;

console.log("Customer Type: " + customer_type);
console.log("Purchase Amount: " + purchase_amount);
console.log("Discount Applied: " + (discount * 100) + "%");
console.log("Final Price: " + finalPrice);