const buttons = document.querySelectorAll("button");
const displayOperation = document.querySelector(".operation");
const displayAnswer = document.querySelector(".answer");
buttons.forEach((btn) => btn.addEventListener("click", handleAction));
const operands = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operators = ["+", "-", "/", "*", "=", "ac"];
let operation = [];
function handleAction(e) {
  const value = e.target.value;
  const type = e.target.dataset.type;
  if (operands.includes(value)) {
    operation.push(value);
  } else if (operators.includes(value)) {
    switch (value) {
      case "+":
        operation.push(value);
        break;
      case "-":
        operation.push(value);
        break;
      case "/":
        operation.push(value);
        break;
      case "*":
        operation.push(value);
        break;
      case "=":
        displayAnswer.textContent = eval(operation.join(""));
        break;
      case "ac":
        operation = [];
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
