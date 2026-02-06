const balanceElement = document.getElementById('balance');
const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const messageElement = document.getElementById('message');
const transactionList = document.getElementById('transactionList');

let currentBalance = 1000.00;

let dailyWithdrawnAmount = 0;
const daily_limit = 500.00;

function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function addToHistory(type, amount) {
    const li = document.createElement('li');
    
    li.className = `history-item ${type.toLowerCase()}`; 
    li.innerHTML = `
        <span>${type}:</span>
        <span>${formatCurrency(amount)}</span>
    `;

    transactionList.prepend(li);
}

function updateUI(message, type) {
    balanceElement.textContent = formatCurrency(currentBalance);
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    amountInput.value = '';
    amountInput.focus();
}

function validateAmount(amount) {
    if (isNaN(amount)) return { isValid: false, errorMessage: "Please enter a valid number." };
    if (amount <= 0) return { isValid: false, errorMessage: "Amount must be greater than zero." };
    return { isValid: true };
}

function handleDeposit() {
    const amount = parseFloat(amountInput.value);
    const validation = validateAmount(amount);
    
    if (!validation.isValid) {
        updateUI(validation.errorMessage, "error");
        return;
    }
    
    currentBalance += amount;
    
    addToHistory("Deposit", amount);
    
    updateUI(`Successfully deposited ${formatCurrency(amount)}!`, "success");
}

function handleWithdraw() {
    const amount = parseFloat(amountInput.value);
    const validation = validateAmount(amount);
    
    if (!validation.isValid) {
        updateUI(validation.errorMessage, "error");
        return;
    }
    
    if (amount > currentBalance) {
        updateUI("Insufficient funds.", "error");
        return;
    }

    if (dailyWithdrawnAmount + amount > daily_limit) {
        const remaining = daily_limit - dailyWithdrawnAmount;
        updateUI(`Daily limit reached! You can only withdraw ${formatCurrency(remaining)} more today.`, "error");
        return;
    }
    
    currentBalance -= amount;
    dailyWithdrawnAmount += amount;
    
    addToHistory("Withdraw", amount);

    updateUI(`Successfully withdrew ${formatCurrency(amount)}!`, "success");
}

depositBtn.addEventListener('click', handleDeposit);
withdrawBtn.addEventListener('click', handleWithdraw);

function initializeApp() {
    balanceElement.textContent = formatCurrency(currentBalance);
    console.log('App initialized with History and Limit features.');
}

initializeApp();