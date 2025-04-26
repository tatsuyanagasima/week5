const value1Input = document.getElementById("value1");
const value2Input = document.getElementById("value2");
const operatorSelect = document.getElementById("choice");
const resultArea = document.getElementById("result");
const formulaArea = document.getElementById("formula");

value1Input.addEventListener("input", calculate);
value2Input.addEventListener("input", calculate);
operatorSelect.addEventListener("change", calculate);

function calculate() {
  const value1 = parseFloat(value1Input.value);
  const value2 = parseFloat(value2Input.value);
  const operator = operatorSelect.value;

  if (isNaN(value1) || isNaN(value2)) {
    formulaArea.textContent = "※有効な数値を入力してください。";
    resultArea.textContent = "";
    return;
  }

  let result;
  let symbol = "";

  if (operator === "addition") {
    result = value1 + value2;
    symbol = "+";
  } else if (operator === "subtraction") {
    result = value1 - value2;
    symbol = "-";
  } else if (operator === "multiplication") {
    result = value1 * value2;
    symbol = "×";
  } else if (operator === "division") {
    if (value2 === 0) {
      formulaArea.textContent = "※0で割ることはできません。";
      resultArea.textContent = "";
      return;
    }
    result = value1 / value2;
    symbol = "÷";
  } else {
    formulaArea.textContent = "※演算子が無効です。";
    resultArea.textContent = "";
    return;
  }

  formulaArea.textContent = `算式：${value1} ${symbol} ${value2}`;
  resultArea.textContent = `結果：${result}`;
}