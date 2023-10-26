let display = document.getElementById("display");
let currentInput = "";

function appendToDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay(type) {
  if (type === "C") {
    currentInput = "";
  } else if (type === "CE") {
    currentInput = currentInput.slice(0, -1);
  }
  display.value = currentInput; 
}

function calculateResult() {
  try {
    currentInput = eval(currentInput);
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
}
