/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*-------------------------------- Variables --------------------------------*/
let firstInput = '';
let secondInput = '';
let operator = '';
let displayValue = '0';
/*------------------------ Cached Element References ------------------------*/
display.innerText = 0;
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    console.log(event.target.innerText);
  
  if (event.target.classList.contains('number')) {
    firstInput += event.target.innerText;
    display.innerText = firstInput;
  }
  
  if (event.target.classList.contains('operator')) {
    operator = event.target.innerText;
    secondInput = firstInput;
    firstInput = '';
  }
  if (event.target.innerText === '=') {
    if (operator === '*') {
      displayValue = Number(secondInput) * Number(firstInput);
      display.innerText = displayValue;
      firstInput = displayValue;
      secondInput = '';
      operator = '';
    }
      else if (operator === '/') {
      displayValue = Number(secondInput) / Number(firstInput);
      display.innerText = displayValue;
      firstInput = displayValue;
      secondInput = '';
      operator = '';
    }
      else if (operator === '+') {
      displayValue = Number(secondInput) + Number(firstInput);
      display.innerText = displayValue;
      firstInput = displayValue;
      secondInput = '';
      operator = '';
    }
      else if (operator === '-') {
      displayValue = Number(secondInput) - Number(firstInput);
      display.innerText = displayValue;
      firstInput = displayValue;
      secondInput = '';
      operator = '';
    }
  }
  if (event.target.innerText === 'C') {
    firstInput = '';
    secondInput = '';
    operator = '';
    displayValue = '0';
    display.innerText = displayValue;
  }
});
/*-------------------------------- Functions --------------------------------*/
function calculate() {
  if (operator === '*') {
    return Number(secondInput) * Number(firstInput);
  } else if (operator === '/') {
    return Number(secondInput) / Number(firstInput);
  } else if (operator === '+') {
    return Number(secondInput) + Number(firstInput);
  } else if (operator === '-') {
    return Number(secondInput) - Number(firstInput);
  }
}