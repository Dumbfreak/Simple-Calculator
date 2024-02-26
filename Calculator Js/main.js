const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function calculate() {
  try {
    let result = eval(display.value);
    var endResult = result.toFixed(2);
    endResult = endResult.replace(/\.00/g, "");
    display.value = endResult;
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function delChar() {
  display.value = display.value.slice(0, -1);
}
