// Select display elements
const balanceElement = document.getElementById('balance');
const messageElement = document.getElementById('message');

// Select input elements
const amountInput = document.getElementById('amountInput');

// Select buttons
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Set initial state
let currentBalance = 1000.00;

/* * DOCU: Formats number to currency string
 * @param {number} amount - Value to format
 * @returns {string} - Formatted string
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function formatCurrency(amount) {
    return `$${amount.toFixed(2)}`;
}

/* * DOCU: Updates screen and resets input
 * @param {string} message - Text to display
 * @param {string} type - CSS class for style
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
    
    console.log(`Transaction: ${message} | New Balance: ${formatCurrency(currentBalance)}`);
}

/* * DOCU: Checks if input is valid number
 * @param {number} amount - Value to check
 * @returns {Object} - Validation result object
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
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

/* * DOCU: Processes deposit transaction
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
    updateUI(`Successfully deposited ${formatCurrency(amount)}!`, "success");
}

/* * DOCU: Processes withdrawal transaction
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
        updateUI("Insufficient funds for this withdrawal.", "error");
        return;
    }
    
    currentBalance -= amount;
    updateUI(`Successfully withdrew ${formatCurrency(amount)}!`, "success");
}

// Attach click event handlers
depositBtn.addEventListener('click', handleDeposit);
withdrawBtn.addEventListener('click', handleWithdraw);

// Prevent enter key default
amountInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
    }
});

/* * DOCU: Sets initial application state
 * @param {void}
 * @returns {void}
 * @throws {void}
 * * Last Updated: 2026-02-07
 * Author: Vince Allen D. Cristal
 * Last Updated By: Vince Allen D. Cristal
 */
function initializeApp() {
    balanceElement.textContent = formatCurrency(currentBalance);
    amountInput.focus();
    
    console.log('Bank Account Manager initialized');
    console.log(`Starting Balance: ${formatCurrency(currentBalance)}`);
}

// Check Document Object Model readiness
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}