document.addEventListener('DOMContentLoaded', function () 
{
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let operator = '';
    let firstNumber = '';
    let secondNumber = '';

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '';
                operator = '';
                firstNumber = '';
                secondNumber = '';
                display.textContent = '';
                return;
            }

            if (value === '=') {
                secondNumber = currentInput;
                display.textContent = calculate(firstNumber, operator, secondNumber);
                currentInput = display.textContent;
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                operator = value;
                firstNumber = currentInput;
                currentInput = '';
                return;
            }

            currentInput += value;
            display.textContent = currentInput;
        });
    });

    function calculate(firstNumber, operator, secondNumber) {
        switch (operator) {
            case '+':
                return parseFloat(firstNumber) + parseFloat(secondNumber);
            case '-':
                return parseFloat(firstNumber) - parseFloat(secondNumber);
            case '*':
                return parseFloat(firstNumber) * parseFloat(secondNumber);
            case '/':
                return parseFloat(firstNumber) / parseFloat(secondNumber);
            default:
                return 0;
        }
    }
});