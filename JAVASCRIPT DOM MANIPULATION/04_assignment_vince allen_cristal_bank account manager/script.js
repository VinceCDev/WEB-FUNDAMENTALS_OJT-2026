const balanceElement = document.getElementById('balance');

const amountInput = document.getElementById('amountInput');

const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

const messageElement = document.getElementById('message');

let currentBalance = 1000.00;
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

function updateUI(message, type) {
    balanceElement.textContent = formatCurrency(currentBalance);
    
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    
    amountInput.value = '';
    
    amountInput.focus();
    
    console.log(`Transaction: ${message} | New Balance: ${formatCurrency(currentBalance)}`);
}

function validateAmount(amount) {
    if (isNaN(amount)) {
        return {
            isValid: false,
            errorMessage: "Please enter a valid number."
        };
    }
    
    if (amount <= 0) {
        return {
            isValid: false,
            errorMessage: "Please enter a positive amount greater than zero."
        };
    }
    
    return {
        isValid: true,
        errorMessage: null
    };
}

function handleDeposit() {
    const amount = parseFloat(amountInput.value);
    
    const validation = validateAmount(amount);
    
    if (!validation.isValid) {
        updateUI(validation.errorMessage, "error");
        return;
    }
    
    currentBalance += amount;
    
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
        updateUI("Insufficient funds for this withdrawal.", "error");
        return;
    }
    
    currentBalance -= amount;
    
    updateUI(`Successfully withdrew ${formatCurrency(amount)}!`, "success");
}

depositBtn.addEventListener('click', handleDeposit);

withdrawBtn.addEventListener('click', handleWithdraw);

amountInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

function initializeApp() {
    balanceElement.textContent = formatCurrency(currentBalance);
    
    amountInput.focus();
    
    console.log('Bank Account Manager initialized');
    console.log(`Starting Balance: ${formatCurrency(currentBalance)}`);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}