// Select display elements
const balanceElement = document.getElementById('balance');
const messageElement = document.getElementById('message');
const transactionList = document.getElementById('transactionList');

// Select input elements
const amountInput = document.getElementById('amountInput');

// Select button elements
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Set initial balance
let currentBalance = 1000.00;

// Monitot daily withdrawals
let dailyWithdrawnAmount = 0;
const daily_limit = 500.00;

/* * DOCU: Formats number as currency string
 * @param {number} amount - Value to format
 * @returns {string} - Formatted currency
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

/* * DOCU: Adds transaction to history list
 * @param {string} type - Transaction type
 * @param {number} amount - Transaction value
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function addToHistory(type, amount) {
    const li = document.createElement('li');
    
    li.className = `history-item ${type.toLowerCase()}`; 
    li.innerHTML = `
        <span>${type}:</span>
        <span>${formatCurrency(amount)}</span>
    `;

    transactionList.prepend(li);
}

/* * DOCU: Updates display and resets input
 * @param {string} message - Status text
 * @param {string} type - Message style class
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateUI(message, type) {
    balanceElement.textContent = formatCurrency(currentBalance);
    
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    
    amountInput.value = '';
    amountInput.focus();
}

/* * DOCU: Validates numeric input value
 * @param {number} amount - Input to check
 * @returns {Object} - Validation result
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function validateAmount(amount) {
    if (isNaN(amount)) return { isValid: false, errorMessage: "Please enter a valid number." };

    if (amount <= 0) return { isValid: false, errorMessage: "Amount must be greater than zero." };
    return { isValid: true };
}

/* * DOCU: Process deposit transaction
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
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

/* * DOCU: Process withdrawal with limit checks
 * @param {void} - Uses global variables
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
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

// Manage click event handlers
depositBtn.addEventListener('click', handleDeposit);
withdrawBtn.addEventListener('click', handleWithdraw);

/* * DOCU: Sets up initial app state
 * @param {void}
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function initializeApp() {
    balanceElement.textContent = formatCurrency(currentBalance);
    console.log('App initialized with History and Limit features.');
}

initializeApp();