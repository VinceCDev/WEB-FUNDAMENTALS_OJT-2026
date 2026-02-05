function getDiscount(customer_type, purchase_amount) {
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
  { name: "Alice", customer_type: "member", purchase_amount: -100 }, 
  { name: "Brian", customer_type: "member", purchase_amount: 800 },
  { name: "Dave", customer_type: "VIP", purchase_amount: 2000 },
];

for (let i = 0; i < customers.length; i++){
    let customer = customers[i]; 
    
    let finalAmount = customer.purchase_amount; 
    
    if (finalAmount < 0) {
        console.warn(`Warning: Invalid amount (${finalAmount}). Treating it as 0.`);
        finalAmount = 0; 
    }

    let finalType = customer.customer_type;

    if (finalType !== "member" && finalType !== "non-member") {
        console.warn(`Warning: Unknown customer type '${finalType}'. Treating as 'non-member'.`);
        finalType = "non-member"; 
    }

    let rate = getDiscount(finalType, finalAmount);
    let result = calculateFinalPrice(finalAmount, rate);

    console.log(`${customer.name} (${finalType}) - Original: $${finalAmount} → Discount: ${result.discountPercent}% ($${result.discountAmount}) → Final: $${result.finalPrice}`);
}