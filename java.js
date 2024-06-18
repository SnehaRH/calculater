let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    display.textContent = '0';
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(op) {
    if (currentInput === '' && op !== '-') return;
    if (currentInput !== '') {
        if (operand1 === '') {
            operand1 = currentInput;
        } else if (operator !== '') {
            operand2 = currentInput;
            operand1 = operate(operand1, operand2, operator);
            display.textContent = operand1;
        }
        currentInput = '';
    }
    operator = op;
}

function calculateSquare() {
    if (currentInput === '') return;
    let num = parseFloat(currentInput);
    currentInput = (num * num).toString();
    display.textContent = currentInput;
}

function calculateResult() {
    if (currentInput === '' || operator === '') return;
    operand2 = currentInput;
    currentInput = '';
    let result = operate(operand1, operand2, operator);
    display.textContent = result;
    operand1 = result;
    operator = '';
    operand2 = '';
}

function operate(op1, op2, operator) {
    let num1 = parseFloat(op1);
    let num2 = parseFloat(op2);
    switch (operator) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            if (num2 === 0) return 'Error';
            return (num1 / num2).toString();
        case '%':
            return (num1 % num2).toString();
        default:
            return '';
    }
}