BMI Calculator Documentation and Comment
Introduction
This is a simple BMI calculator written in JavaScript. It calculates the body mass index (BMI) of a person based on their weight and height, and provides a brief description of the BMI condition.

Code Explanation

JavaScript
Copy code
const btnEl = document.getElementById('btn');
const resultEl = document.getElementById('result');
const weightcondtEl = document.getElementById('weight-condt')
These lines of code create variables for the button element, the result element and the weight condition element.

javascript
Copy code
const calculateBMI = () => 
{
    const heightValue = document.getElementById('height').value/100;
    const weightValue = document.getElementById('weight').value;
    const bmiValue = weightValue / (heightValue * heightValue);
    resultEl.value = bmiValue.toFixed(3);
}
This function calculates the BMI of a person using the input values of weight and height. The height value is divided by 100 to convert it from centimeters to meters. The calculated BMI value is then rounded to three decimal places and displayed in the result element.

JavaScript
Copy code
    if (bmiValue < 18.5) {
        weightcondtEl.innerText='Under weight'
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightcondtEl.innerText='Normal Weight'
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightcondtEl.innerText = 'Overweight';
    } else if (bmiValue >= 30) {
        weightcondtEl.innerText = 'Obesity';
    }
This code checks the BMI value and displays a brief description of the weight condition in the weight condition element based on the following criteria:

BMI less than 18.5: Underweight
BMI between 18.5 and 24.9: Normal Weight
BMI between 25 and 29.9: Overweight
BMI greater than or equal to 30: Obesity

JavaScript
Copy code
btnEl.addEventListener('click', calculateBMI)
This code adds an event listener to the button element to listen for a click event. When the button is clicked, the calculateBMI() function is called, and the BMI and weight condition are displayed in their respective elements.

Conclusion
This is a basic implementation of a BMI calculator in JavaScript that can be easily understood by beginners. The code is simple and concise, and the comments provide additional clarity.