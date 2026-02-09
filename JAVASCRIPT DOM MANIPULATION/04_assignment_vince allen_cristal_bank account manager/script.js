// Get elements using ID selection
const balanceElement = document.getElementById('balance');
const amountInput = document.getElementById('amountInput');
const messageElement = document.getElementById('message');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Initial State
let currentBalance = 1000.00;

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

    currentBalance -= amount;
    updateUI(`Successfully withdrew ${formatCurrency(amount)}`);
});