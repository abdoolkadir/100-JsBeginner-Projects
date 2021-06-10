// create a calculate tip function
// Display tip function
// Validate inputs

const button = document.querySelector('.btn').addEventListener('click', getTip);

// validate inputs
function validateInput(bill, users) {
    let error = '';
    if(bill === '' || bill <= 0) {
        // Show error
        error += `
        <p>Bill must be greater than 0</p>`;
    };

    if(users < 1) {
        // Show Error
        error += `
        <p>People sharing the bill must be greater than 0</p>`;
    };

    const alertDiv = document.createElement('div');
    alertDiv.innerHTML = error;
    alertDiv.classList.add( 'alert', 'alert-danger');
    const calculator = document.querySelector('.calculator');
    const form = document.querySelector('form');

    calculator.insertBefore(alertDiv, form)

    setTimeout(() => {
        alertDiv.remove();
    }, 10000);
};

function calculateTip(bill, people) {
    const percentage = 10;
    const tip = (percentage / 100) * bill;
    const totalBill = parseFloat(bill) + parseFloat(tip);
    const shareBill = Math.ceil(parseFloat(totalBill) / parseFloat(people));

    return [tip, totalBill, shareBill];
}

function getTip(e) {
    const bill = document.getElementById('bill').value;
    const numUsers = document.getElementById('people').value;

    // validate inputs

    if(bill === '' || numUsers === '') {
        
        validateInput(bill, numUsers);

    } else {
        const results = calculateTip(bill, numUsers);

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';

        alertDiv.innerHTML = `
            <p>Tip amount is $${results[0]}</p>
            <p>The total bill is $${results[1]}</p>
            <p>Each person will pay $${results[2]}</p>
        `;
        const calculator = document.querySelector('.calculator');
        const form = document.querySelector('form');
    
        calculator.insertBefore(alertDiv, form);

        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
        
    }
    e.preventDefault();
};