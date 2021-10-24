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


// const markMass = 78
// const johnMass = 92

// const markHeight = 1.69
// const johnHeight = 1.95

const markMass = document.querySelector('.person-1-weight-text');
const johnMass = document.querySelector('.person-2-weight-text');

const markHeight = document.querySelector('.person-1-height-text');
const johnHeight = document.querySelector('.person-2-height-text');

const submitOne = document.querySelector('.button-1');
const submitTwo = document.querySelector('.button-2');

const mark = {
    mass : 78,
    height: 1.69
}

const john = {
    mass: 92,
    height: 1.95
}



const getBMI = (person) => {
  let height = person.height
  let weight = person.mass

  console.log(`${person}'s height is ${person.height} and their weight is ${person.weight} `)
};