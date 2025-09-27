const display = document.getElementById('display');

// Append character to display
function appendChar(char) {
  display.value += char;
}

// Clear entire display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate the expression
function calculate() {
  try {
    display.value = eval(display.value); // evaluates string expression
  } catch {
    display.value = 'Error';
  }
}
