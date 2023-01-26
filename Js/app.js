const buttons = document.querySelectorAll("button");
const displayOperation = document.querySelector(".operation");
const displayAnswer = document.querySelector(".answer");
buttons.forEach((btn) => btn.addEventListener("click", handleAction));
const operands = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operators = ["+", "-", "/", "x", "=", "ac"];
let operation = [];
let computation = [];
let isCompute = false;
function handleAction(e) {
  const value = e.target.value;
  const type = e.target.dataset.type;
  if (isCompute && value !== "=" && value !== "ac") {
    isCompute = false;
    operation.push(value);
    computation.push(value);
    displayOperation.textContent = operation.join("");
    displayAnswer.textContent = "";
    return;
  }
  if (operands.includes(value)) {
    if (operation.length === 1 && operators.includes(operation[0]))
      return alert("invalid format");
    operation.push(value);
    computation.push(value);
  } else if (operators.includes(value)) {
    if (operation.length === 0) return alert("invalid format");
    if (value !== "=") operation.push(value);
    const allNumbers = operation.join("").replaceAll(/[=\-x+\/]/gi, " ");
    const allNumbersArray = allNumbers.split(" ");
    let lastNumber = allNumbersArray[allNumbersArray.length - 1];
    if (!lastNumber) lastNumber = allNumbersArray[allNumbersArray.length - 2];
    computation = computation.splice(0, computation.length - lastNumber.length);
    lastNumber = parseFloat(lastNumber);
    let newNumber = "";
    if (!lastNumber) newNumber = value;
    else newNumber = lastNumber + value;
    switch (value) {
      case "+":
        computation.push(newNumber);
        break;
      case "-":
        computation.push(newNumber);
        break;
      case "/":
        computation.push(newNumber);
        break;
      case "x":
        computation.push(newNumber);
        break;
      case "=":
        try {
          computation.push(lastNumber);
          let evaluation = computation.join("");
          if (operators.includes(evaluation[0])) evaluation = "0" + evaluation;
          evaluation = evaluation.replaceAll(/x/gi, "*");
          displayAnswer.textContent = eval(evaluation);
          isCompute = true;
        } catch (error) {
          alert(error);
        }
        break;
      case "ac":
        operation = [];
        computation = [];
        displayAnswer.textContent = "";
      default:
        break;
    }
  } else {
    alert("invalid input");
    return;
  }
  displayOperation.textContent = operation.join("");
  return;
}
