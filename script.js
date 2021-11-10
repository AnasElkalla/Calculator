"use strict";
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(" .three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".dot");
const output = document.querySelector(".result");
const equation = document.querySelector(".equation");
const sign = document.querySelector(".sign");
let memory = [];
let a;
const makeSound = function () {
  let click = new Audio("click.mp3");
  click.play();
};

equation.textContent = 0;
document.addEventListener("click", function (e) {
  makeSound();
  if (e.target.textContent < 10) {
    if (output.textContent == 0) {
      if (
        output.textContent === "0." ||
        output.textContent === "0.0" ||
        output.textContent === "0.00" ||
        output.textContent === "0.00" ||
        output.textContent === "0.000" ||
        output.textContent === "0.0000" ||
        output.textContent === "0.00000" ||
        output.textContent === "0.000000" ||
        output.textContent === "0.0000000" ||
        output.textContent === "0.00000000" ||
        output.textContent === "0.000000000"
      ) {
        output.textContent += e.target.textContent;
      } else {
        output.textContent = "";
        output.textContent = e.target.textContent;
      }
    } else {
      output.textContent += e.target.textContent;
    }
  } else if (e.target === decimal && output.textContent !== "0.") {
    output.textContent += e.target.textContent;
  }
});
del.addEventListener("click", function (e) {
  makeSound();
  if (output.textContent == 0) {
    output.textContent = 0;
  } else {
    //  let array = Array.from(output.textContent);
    output.textContent = output.textContent.slice(0, -1);
    if (output.textContent.length === 0) {
      output.textContent = 0;
    }
  }
});
reset.addEventListener("click", function () {
  makeSound();
  output.textContent = 0;
  equation.textContent = 0;
  memory = [];
  sign.textContent = "";
});
const screenTimeout = function () {};
document.addEventListener("click", function (e) {
  makeSound();
  if (e.target === plus && memory.length > 1) {
    output.textContent = memory[memory.length - 1];
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = Number(output.textContent) + a;
    output.textContent = 0;
    sign.textContent = `+`;
  } else if (e.target === plus) {
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = Number(output.textContent) + a;
    output.textContent = 0;
    sign.textContent = `+`;
  } else if (e.target === equal && sign.textContent.includes("+")) {
    let a = Number(output.textContent);
    output.textContent =
      Number(output.textContent) + Number(equation.textContent);
    sign.textContent = `+ ${a} =`;
    memory.push(output.textContent);
    if (output.textContent.includes(".")) {
      Math.round(Number(output.textContent) * 10) / 10;
    }
  }
});
document.addEventListener("click", function (e) {
  makeSound();
  if (e.target === minus && memory.length > 1) {
    output.textContent = memory[memory.length - 1];
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a - Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `-`;
  } else if (e.target === minus) {
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a - Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `-`;
  } else if (e.target === equal && sign.textContent.includes("-")) {
    let a = Number(output.textContent);
    output.textContent =
      Number(equation.textContent) - Number(output.textContent);
    sign.textContent = `- ${a} =`;
    memory.push(output.textContent);
    if (output.textContent.includes(".")) {
      Math.round(Number(output.textContent) * 10) / 10;
    }
  }
});
document.addEventListener("click", function (e) {
  makeSound();
  if (e.target === multiply && memory.length > 1) {
    output.textContent = memory[memory.length - 1];
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a * Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `x`;
  } else if (e.target === multiply) {
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a * Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `x`;
  } else if (e.target === equal && sign.textContent.includes("x")) {
    let a = Number(output.textContent);
    output.textContent =
      Number(equation.textContent) * Number(output.textContent);
    sign.textContent = `x ${a} =`;
    memory.push(output.textContent);
    if (output.textContent.includes(".")) {
      Math.round(Number(output.textContent) * 10) / 10;
    }
  }
});
document.addEventListener("click", function (e) {
  makeSound();
  if (e.target === divide && memory.length > 1) {
    output.textContent = memory[memory.length - 1];
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a / Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `÷`;
  } else if (e.target === divide) {
    equation.textContent = output.textContent;
    let a = Number(equation.textContent);
    output.textContent = a / Number(output.textContent);
    output.textContent = 0;
    sign.textContent = `÷`;
  } else if (e.target === equal && sign.textContent.includes("÷")) {
    let a = Number(output.textContent);
    output.textContent =
      Number(equation.textContent) / Number(output.textContent);
    sign.textContent = `÷ ${a} =`;
    memory.push(output.textContent);
    if (output.textContent.includes(".")) {
      Math.round(Number(output.textContent) * 10) / 10;
    }
  }
});
