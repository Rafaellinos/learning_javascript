const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeToLog(
  opetation,
  preResult,
  operationNumber,
  result,
) {
  const log = {
    operator: opetation,
    preResult: preResult,
    operationNumber: operationNumber,
    result: result
  }
  logEntries.push(log);
  console.log(logEntries)
}

function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}

function createAndWriteLog(operator, num1, num2){
  const calDescription = `${num1} ${operator} ${num2}`
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function calculateResult(calculationType) {
  
  // if (
  //   calculationType !== 'ADD' &&
  //   calculationType !== 'SUBTRACT' &&
  //   calculationType !== 'MULTIPLY' &&
  //   calculationType !== 'DIVIDE' ||
  //   !enteredNumber
  // ) {
  //   return;
  // }

  const enteredNumber = getUserNumberInput();
  if (
    (calculationType === 'ADD' ||
    calculationType === 'SUBTRACT' ||
    calculationType === 'MULTIPLY' ||
    calculationType === 'DIVIDE') &&
    enteredNumber
  ) {
    console.log(calculationType);
    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'; 
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
  }
}

function add() {
  calculateResult('ADD');
}

function subtract () {
  calculateResult('SUBTRACT');
}

function multiply () {
  calculateResult('MULTIPLY');
}

function divide () {
  calculateResult('DIVIDE');
}

