const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const specialChars = ["/", "*", "=", "+", "-"];
let output = "";

const calculate = (btnValue) => {
  result.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output);
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "CE") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  result.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.key));
});
