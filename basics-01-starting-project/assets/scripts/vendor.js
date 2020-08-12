const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

let logEntries = [];
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
  console.log(logEntries);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

function createAndWriteLog(operator, num1, num2){
  const calDescription = `${num1} ${operator} ${num2}`
  currentCalculationOutput.textContent = calDescription;
}

function addNumbers() {
  const enteredNumber = userInput.value;
  let out = parseInt(enteredNumber) + 5;
  currentResultOutput.textContent = out;
  createAndWriteLog('+', '5', enteredNumber);
  writeToLog('+', '5', enteredNumber, out,);
}

function subtract () {
  const enteredNumber = userInput.value;
  let out = parseInt(enteredNumber) - 5;
  currentResultOutput.textContent = out;
  createAndWriteLog('-', '5', enteredNumber);
  writeToLog('-', '5', enteredNumber, out,);
}

function multiply () {
  const enteredNumber = userInput.value;
  let out = parseInt(enteredNumber) * 5;
  currentResultOutput.textContent = out;
  createAndWriteLog('*', '5', enteredNumber);
  writeToLog('*', '5', enteredNumber, out,);
}

function divide () {
  const enteredNumber = userInput.value;
  let out = parseInt(enteredNumber) / 5;
  currentResultOutput.textContent = out;
  createAndWriteLog('/', '5', enteredNumber);
  writeToLog('/', '5', enteredNumber, out,);
}

