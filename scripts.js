var operator = null;
var inputValueMemo = 0;

function getContentClick(event) {
  const value = event.target.innerHTML;
  filterAction(value);
}

const filterAction = (value) => {
  value === "0" ? addNumberInpunt(0) : null;
  value === "1" ? addNumberInpunt(1) : null;
  value === "2" ? addNumberInpunt(2) : null;
  value === "3" ? addNumberInpunt(3) : null;
  value === "4" ? addNumberInpunt(4) : null;
  value === "5" ? addNumberInpunt(5) : null;
  value === "6" ? addNumberInpunt(6) : null;
  value === "7" ? addNumberInpunt(7) : null;
  value === "8" ? addNumberInpunt(8) : null;
  value === "9" ? addNumberInpunt(9) : null;
  value === "," ? addNumberInpunt(",") : null;

  value === "+" ? setOperation("+") : null;
  value === "-" ? setOperation("-") : null;
  value === "x" ? setOperation("*") : null;
  value === "/" ? setOperation("/") : null;
  value === "%" ? setOperation("%") : null;
  value === "+/-" ? setOperation("+/-") : null;

  value === "=" ? calculation() : null;
  value === "AC" ? resetCalculator() : null;
};

function addNumberInpunt(value) {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  const inputValue = inputScreen.value;

  if (inputValue === "0" && inputValue.length === 1 && value !== ",") {
    inputScreen.value = value;
    return;
  }

  if (inputScreen.value === "" && value == ",") {
    inputScreen.value = 0 + value;
    return;
  }

  inputScreen.value = inputValue + value;
}

function setOperation(operator) {
  const inputScreenValue =
    document.getElementsByClassName("calculator__screen")[0].value;
  this.operator = operator;
  if (inputScreenValue != 0) {
    calculation();
  }
}

function calculation() {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  let valueOne = transformCommaToPoint(this.inputValueMemo);
  let valueTwo = transformCommaToPoint(inputScreen.value);
  let total = 0;

  if (this.operator === "+" && inputScreen.value !== "") {
    total = valueOne + valueTwo;
  }

  if (this.operator === "-" && inputScreen.value !== "") {
    if (valueOne !== 0) {
      total = valueOne - valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "*" && inputScreen.value !== "") {
    if (valueOne !== 0) {
      total = valueOne * valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "/" && inputScreen.value !== "") {
    if (valueOne !== 0) {
      total = valueOne / valueTwo;
    } else {
      total = valueTwo;
    }
  }

  if (this.operator === "%" && inputScreen.value !== "") {
    total = valueTwo / 100;
  }

  if (this.operator === "+/-" && inputScreen.value !== "") {
    if (valueTwo > 0) {
      total = -valueTwo;
    }
  }

  total = tranformPointToComma(total);
  this.inputValueMemo = total;
  inputScreen.value = "";
  inputScreen.placeholder = total;
}

const resetCalculator = () => {
  const inputScreen = document.getElementsByClassName("calculator__screen")[0];
  inputScreen.value = 0;
  this.inputValueMemo = 0;
  this.operator = null;
};

function transformCommaToPoint(value) {
  if (typeof value !== "number") {
    let resultTransform = value.replace(",", ".");
    return parseFloat(resultTransform);
  }
  return value;
}

function tranformPointToComma(value) {
  let resultTranform = value.toString();
  resultTranform = resultTranform.replace(".", ",");

  return resultTranform;
}
