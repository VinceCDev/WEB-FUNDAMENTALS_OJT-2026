function getDiscount(customer_type, purchase_amount) {
    if (purchase_amount < 0) {
        console.log("Warning: Invalid amount (" + purchase_amount + "). Treating it as 0.");
        purchase_amount = 0; 
    }

    if (customer_type !== "member" && customer_type !== "non-member") {
        console.log("Warning: Unknown customer type '" + customer_type + "'. Treating as 'non-member'."); 
        customer_type = "non-member";
    }

    if (customer_type === "member" && purchase_amount >= 1000) {
        return 0.20;
    } else if (customer_type === "member" && (purchase_amount >= 500 && purchase_amount <= 999)){
        return 0.10;
    } else if (customer_type === "member" && purchase_amount < 500){
        return 0.05;
    } else if (customer_type === "non-member" && purchase_amount >= 1000) {
        return 0.10;
    } else if (customer_type === "non-member" && (purchase_amount >= 500 && purchase_amount <= 999)){
        return 0.05;
    } else {
        return 0;
    }
}

function calculateFinalPrice(purchase_amount, discountRate) {
    let discountAmount = purchase_amount * discountRate;
    let finalPrice = purchase_amount - discountAmount;
    
    return {
        finalPrice: finalPrice,
        discountAmount: discountAmount,
        discountPercent: discountRate * 100
    };
}

const customers = [
  { name: "Alice", customer_type: "member", purchase_amount: 100 }, 
  { name: "Brian", customer_type: "member", purchase_amount: 800 },
  { name: "Chloe", customer_type: "non-member", purchase_amount: 1200 },
];

for (let i = 0; i < customers.length; i++){
    let customer = customers[i]; 
    let rate = getDiscount(customer.customer_type, customer.purchase_amount);
    let result = calculateFinalPrice(customer.purchase_amount, rate);
    console.log(`${customer.name} (${customer.customer_type}) - Original: $${customer.purchase_amount} → Discount: ${result.discountPercent}% ($${result.discountAmount}) → Final: $${result.finalPrice}`);
}