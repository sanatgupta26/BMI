function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid weight and height.";
    return;
  }

  var bmi = weight / (height * height);
  var resultText = "Your BMI is " + bmi.toFixed(2) + " - ";

  if (bmi < 18.5) {
    resultText += "Underweight";
  } else if (bmi < 25) {
    resultText += "Normal Weight";
  } else if (bmi < 30) {
    resultText += "Overweight";
  } else {
    resultText += "Obese";
  }

  document.getElementById("result").innerHTML = resultText;
}

document.getElementById("calculateButton").addEventListener("click", calculateBMI);
