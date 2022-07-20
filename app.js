// create variables for numbers and operator
let currentNum = '';
let previousNum = '';
let operator = "";

// Storing all HTML elements in variables
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-clear]')
const previousOperand = document.querySelector('[data-previous-operand]')
const currentOperand = document.querySelector('[data-current-operand]')

// Foreach to find out when a number button has been pressed
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        updateDisplay(e.target.textContent);
    });
});

// function to update the display with current
function updateDisplay(number) {
  if(currentNum.length <= 9)  
    currentNum += number
    currentOperand.innerText = currentNum
}

//forEach to run over operators
operationButtons.forEach(chosenOperator => {
    chosenOperator.addEventListener('click', (e) => {
        if(e.target.classList.contains('divide')) {
            operator = '/';
        } else if(e.target.classList.contains('multiply')) {
            operator = '*';
        } else if(e.target.classList.contains('minus')) {
            operator = '-';
        } else if(e.target.classList.contains('add')) {
            operator = '+';
        }

        previousNum = currentNum;
        previousOperand.textContent = previousNum + ' ' + operator;
        currentNum = '';
        currentOperand.textContent = currentNum
    });
});

//Equals button that when clicked executes equation function
equalsButton.addEventListener('click', (e) => {
    equation(previousNum, operator, currentNum)
} )

//equation function to get the answer for the user
function equation() {
    let result = 0;
    if(operator === '/'){
         result = previousNum / currentNum;
         previousNum = "";
         currentNum = result;
         updateDisplay()
        previousOperand.innerText = previousNum
    } else if(operator ==='+') {
        result = previousNum + currentNum;
        previousNum = "";
        currentNum = result;
        updateDisplay()
        previousOperand.innerText = previousNum
    } else if(operator ==='-') {
        result = previousNum - currentNum;
        previousNum = "";
        currentNum = result;
        updateDisplay()
        previousOperand.innerText = previousNum
    } else if(operator ==='*') {
        result = previousNum * currentNum;
        previousNum = "";
        currentNum = result;
        updateDisplay()
        previousOperand.innerText = previousNum
    } else if (operator === '' || previousNum === '') {
       return false;
    }
    // reset prev num, change cur num to the result and update display to show result
    

}

//Clear button that when clicked executes function to clear the display
allClearButton.addEventListener('click', () => {
    currentNum = "";
    previousNum = "";
    operator = "";
    previousOperand.innerText = '';
    currentOperand.innerText = 0;
});







