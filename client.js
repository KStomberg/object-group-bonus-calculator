const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
let returnPercentageRating = 0;
let returnPercentageDigit = 0;
let returnPercentage = 0;
function employeeBonus() {
  for (let i = 0; i < employees.length; i++) {
    const el = employees[i];
    let names = el.name;
    let rating = el.reviewRating;
    let numberLength = el.employeeNumber.length;
    console.log(names);
    console.log(numberLength)
    ratingCalculator(rating);
    digitLength(numberLength);
    returnPercentage = returnPercentageDigit + returnPercentageRating;
  }// end for
  return returnPercentage
}// end employeeBonus

function ratingCalculator(rating) {
  if (rating === 5) {
    returnPercentageRating = .10;
  } else if (rating === 4) {
    returnPercentageRating = .06;
  } else if (rating === 3) {
    returnPercentageRating = .04;
  }// end if
  return returnPercentageRating
}// end ratingCalculator function

function digitLength(numberLength) {
  if (numberLength === 4) {
    returnPercentageDigit = 0.05;
  }// end if
  return returnPercentageDigit;
}// end digitLength function
console.log(employeeBonus(employees));

