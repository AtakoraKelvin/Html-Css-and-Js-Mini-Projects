const height = document.getElementById("height");
const weight = document.getElementById("weight");
const CalBtn = document.querySelector("button");
const BMIResult = document.getElementById("BMI");
const weightCondition = document.querySelector(".condition");

function calBMI() {
    let cmToM = height.value / 100;

    const BMI = (weight.value / cmToM ** 2).toFixed(2);

    if (BMI < 18.5) {
        weightCondition.textContent = "Underweight";
    } else if (BMI > 18.5 || BMI < 24.9) {
        weightCondition.textContent = "Normal weight";
    } else if (BMI >= 25 || BMI <= 29.9) {
        weightCondition.textContent = "Overweight";
    } else {
        weightCondition.textContent = "Obese";
    }

    return BMI;
}

CalBtn.addEventListener("click", () => {
    if (height.value === "" || weight.value === "") {
        BMIResult.textContent = "Please input the value for Height and Weight.";
        height.focus();
        return;
    }

    BMIResult.textContent = calBMI();
});
