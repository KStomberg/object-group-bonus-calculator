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
  {
    name: 'Doug',
    employeeNumber: '4581',
    annualSalary: '13000',
    reviewRating: 5,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
$(document).ready( readyNow )//end document ready
function readyNow() {
  employeeBonus();
  console.log("Ready now")
  $("#bonusCalculator").on("click", displayUpdatedEmployees);
  }//end readyNow function

let updatedEmployees = [];

let returnPercentageRating = 0;

let returnPercentageDigit = 0;

let returnPercentage = 0;

let returnPercentageIncome = 0;

function employeeBonus() {
  for (let i = 0; i < employees.length; i++) {
    const el = employees[i];
    let names = el.name;
    let rating = el.reviewRating;
    let numberLength = el.employeeNumber.length;
    let salary = Number(el.annualSalary);
    let returnCompensation = 0;
    let returnTotalBonus = 0;
    console.log(names);
    console.log(numberLength);
    ratingCalculator(rating);
    digitLength(numberLength);
    employeeIncomeCheck(salary);
    returnPercentage = returnPercentageDigit + returnPercentageRating;
    if (returnPercentage > 0.13) {
      returnPercentage = 0.13;
      returnPercentage = returnPercentage - returnPercentageIncome;
    } else if (returnPercentage - returnPercentageIncome < 0) {
      returnPercentage = 0;
    }
    returnTotalBonus = salary * returnPercentage;
    returnCompensation = returnTotalBonus + salary;
    const employeeBonusObject = {
      name: names,
      bonusPercentage: returnPercentage,
      totalCompensation: returnCompensation,
      totalBonus: returnTotalBonus,
    };
    updatedEmployees.push(employeeBonusObject);
  } // end for
  return returnPercentage;
} // end employeeBonus

function ratingCalculator(rating) {
  returnPercentageRating = 0;
  if (rating === 5) {
    returnPercentageRating = 0.1;
  } else if (rating === 4) {
    returnPercentageRating = 0.06;
  } else if (rating === 3) {
    returnPercentageRating = 0.04;
  } // end if
  return returnPercentageRating;
} // end ratingCalculator function

function digitLength(numberLength) {
  returnPercentageDigit = 0;
  if (numberLength === 4) {
    returnPercentageDigit = 0.05;
  } // end if
  return returnPercentageDigit;
} // end digitLength function

function employeeIncomeCheck(salary) {
  returnPercentageIncome = 0;
  if (salary > 65000) {
    returnPercentageIncome = 0.01;
  } // end if
  return returnPercentageIncome;
} // end employeeIncomeCheck

function displayUpdatedEmployees() {
  let el = $('#updatedEmployee');
  el.empty();
  for (let i = 0; i < updatedEmployees.length; i++) {
    const employee = updatedEmployees[i];
    el.append(
      `<li>` +
      "Name: " +
      employee.name +
      " Bonus percentage: " +
      employee.bonusPercentage + 
      " Total compensation: " + 
      employee.totalCompensation +
      " Total bonus: " +
      employee.totalBonus +
      `</li>`
    );
  }
}
