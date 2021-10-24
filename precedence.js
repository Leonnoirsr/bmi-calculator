// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �


// Mark
const markHeight = document.querySelector('.person-1-height-text');
const markWeight = document.querySelector('.person-1-weight-text');
// John
const johnHeight = document.querySelector('.person-2-height-text');
const johnWeight = document.querySelector('.person-2-weight-text');

const submitOne = document.querySelector('.button-1');
const submitTwo = document.querySelector('.button-2');

const bmiOne = document.querySelector('#bmi-1');
const bmiTwo = document.querySelector('#bmi-2');


const getBMI = (personName, personHeight, personMass, para) => {
  // We needed the calucation of the BMI.
  const calulatedBMI = personMass / personHeight ** 2;
  // Showing the results in the the innerText.
  bmiResults(personName, calulatedBMI, para);
};

// This will show the results on the screen.
const bmiResults = (personName, calculatedBMI, para) => {
  para.innerText = `${personName}'s BMI is ${calculatedBMI}.`;
}

// This is for Mark
submitOne.addEventListener('click', () => {
  const userHeight = Number(markHeight.value);
  const userMass = Number(markWeight.value);
  getBMI("Mark", userHeight, userMass, bmiOne);
})