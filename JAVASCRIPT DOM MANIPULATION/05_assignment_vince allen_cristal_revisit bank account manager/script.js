// Get elements using ID selection
const balanceElement = document.getElementById('balance');
const amountInput = document.getElementById('amountInput');
const messageElement = document.getElementById('message');
const transactionList = document.getElementById('transactionList');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Initial State
let currentBalance = 1000.00;
let dailyWithdrawnAmount = 0;
const daily_limit = 500.00;

/* * DOCU: Formats a numerical value into a USD currency string
 * @param {number} amount - The numerical amount to be formatted
 * @returns {string} - The formatted string 
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

/* * DOCU: Adds a new transaction item to the history list in the DOM
 * @param {string} type - The type of transaction
 * @param {number} amount - The transaction amount
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function addToHistory(type, amount) {
    const li = document.createElement('li');
    
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.padding = '5px 0';
    li.style.borderBottom = '1px solid #eee';
    li.style.color = type === 'Deposit' ? 'green' : 'red';

    li.innerHTML = `
        <span>${type}</span>
        <span>${formatCurrency(amount)}</span>
    `;

    transactionList.prepend(li);
}

/* * DOCU: Updates the DOM elements to reflect the current balance and transaction status
 * @param {string} message - The status message to display to the user
 * @param {boolean} [isError=false] - If true, displays text in red; otherwise green
 * @returns {void} - Does not return a value
 * @throws {void} - No explicit exceptions thrown
 * * Last Updated: 2026-02-09
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function updateUI(message, isError = false) {
    balanceElement.textContent = formatCurrency(currentBalance);
    messageElement.textContent = message;
    messageElement.style.color = isError ? 'red' : 'green';
    amountInput.value = ''; 
}

// Event handler for the deposit button
depositBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        updateUI('Please enter a valid positive amount.', true);
        return;
    }

    currentBalance += amount;
    
    addToHistory('Deposit', amount);
    updateUI(`Successfully deposited ${formatCurrency(amount)}`);
});

// Event handler for the withdraw button
withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        updateUI('Please enter a valid positive amount.', true);
        return;
    }

    if (amount > currentBalance) {
        updateUI('Insufficient funds.', true);
        return;
    }

    if (dailyWithdrawnAmount + amount > daily_limit) {
        const remaining = daily_limit - dailyWithdrawnAmount;
        updateUI(`Daily limit reached! You can only withdraw ${formatCurrency(remaining)} more today.`, true);
        return;
    }

    currentBalance -= amount;
    dailyWithdrawnAmount += amount;

    addToHistory('Withdraw', amount);
    updateUI(`Successfully withdrew ${formatCurrency(amount)}`);
});