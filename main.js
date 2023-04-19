// Declare variables to reference the relevant HTML elements
const btnEl = document.getElementById('btn'); // the button element
const resultEl = document.getElementById('result'); // the element to display the BMI result
const weightcondtEl = document.getElementById('weight-condt') // the element to display the weight condition

// Define the function that calculates BMI and updates the display
const calculateBMI = () => {
  // Get the user's input values for height and weight
  const heightValue = document.getElementById('height').value / 100; // the height value (converted to meters)
  const weightValue = document.getElementById('weight').value; // the weight value (in kilograms)

  // Calculate the BMI using the input values
  const bmiValue = weightValue / (heightValue * heightValue);

  // Update the display with the calculated BMI value, rounded to three decimal places
  resultEl.value = bmiValue.toFixed(3);

  // Display the weight condition based on the calculated BMI value
  if (bmiValue < 18.5) {
    weightcondtEl.innerText='Under weight'
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightcondtEl.innerText='Normal Weight'
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightcondtEl.innerText = 'Overweight';
  } else if (bmiValue >= 30) {
    weightcondtEl.innerText = 'Obesity';
  }
}

// Add an event listener to the button element to trigger the BMI calculation when clicked
btnEl.addEventListener('click', calculateBMI);
