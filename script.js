let height = parseInt(document.getElementById("heightInput").value);
let weight = parseInt(document.getElementById("weightInput").value);
let result = document.querySelector(".result");
let button = document.querySelector(".btn");

const calculate = (e) => {
  let height = parseInt(document.getElementById("heightInput").value);
  let weight = parseInt(document.getElementById("weightInput").value);
  console.log(height);
  let bmi = (weight / (height * height)) * 10000;
  result.innerHTML = "BMI is " + bmi.toFixed(2);
};

button.addEventListener("click", calculate);
