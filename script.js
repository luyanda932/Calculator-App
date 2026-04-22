const display = document.getElementById("display");

function appendToDisplay(value) {
  let displayString = display.value;
  if (displayString.match(/(\d+\.\d+)$/)) {
    if (value === ".") {
      return;
    }
  }
  if (
    displayString.at(-1) === "+" ||
    displayString.at(-1) === "-" ||
    displayString.at(-1) === "*" ||
    displayString.at(-1) === "/"
  ) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      display.value = displayString.slice(0, -1);
    }
  }

  display.value += value;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
