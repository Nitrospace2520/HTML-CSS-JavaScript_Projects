//console.clear();
const getResult = (bmi) => {
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    return "Optimum range";
  } else if (bmi <= 29.9 && bmi >= 25) {
    return "Overweight";
  } else if (bmi <= 34.9 && bmi >= 30) {
    return "Class I obesity";
  } else if (bmi <= 39.9 && bmi >= 35) {
    return "Class II obesity";
  } else if (bmi >= 40) {
    return "Class III obesity";
  }
};
const calculateBMI = (height, weight) => {
  height = height / 100.0;
  const bmi = (1.0 * weight) / Math.pow(height, 2);
  return `Your BMI is <b> ${bmi.toFixed(
    2
  )}</b> which is under <q><b>${getResult(bmi)}</b></q>  `;
};
document.querySelector("#generate").addEventListener("click", (event) => {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  if (isNaN(height) || height < 0 || height === "") {
    document.querySelector(
      "#bmi-res"
    ).innerHTML = `Please provide a valid <b>Height</b>`;
  } else if (isNaN(weight) || weight < 0 || weight === "") {
    document.querySelector(
      "#bmi-res"
    ).innerHTML = `Please provide a valid <b>Weight</b>`;
  } else {
    const resBMI = calculateBMI(height, weight);
    document.querySelector("#bmi-res").innerHTML = `${resBMI}`;
    document.querySelector("#bmi-res").style.padding = "1.2rem";
  }
});
document.querySelector("#reset").addEventListener("click", (event) => {
  location.reload();
});
