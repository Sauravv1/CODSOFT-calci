
function addToDisplay(value) {
  var display = document.getElementsByName('display')[0];
  display.value += value;
}

function clearDisplay() {
  var display = document.getElementsByName('display')[0];
  display.value = '';
}

function deleteLastCharacter() {
  var display = document.getElementsByName('display')[0];
  display.value = display.value.slice(0, -1);
}

function calculate() {
  var display = document.getElementsByName('display')[0];
  try {
      display.value = eval(display.value);
  } catch (error) {
      display.value = 'Error';
  }
}