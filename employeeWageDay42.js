/**
 * Constant values
 */
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_MONTH = 160;
const MAX_NUM_OF_WORKING_DAYS = 20;

/**
 * To get working hors of an employee
 * @param {gives an employee present or not} empCheck
 * @returns {employee working hors if present}
 */
function getWorkingHours(empCheck) {
  switch (empCheck) {
    case IS_PART_TIME:
      return PART_TIME_HOURS;
    case IS_FULL_TIME:
      return FULL_TIME_HOURS;
    default:
      return 0;
  }
}

/**
 * Calculates every day wage for employee
 * @returns wage for the day or for the month
 */
function calculateDailyWage(empHrs) {
  return empHrs * WAGE_PER_HOUR;
}

/**
 * Variables
 */
let totalEmployeeHrs = 0;
let day = 0;
let empDailyWageArr = new Array(); //to store daily wage
let empDailyWageMap = new Map(); //to store daily wage(day wise)
let empDailyHrsMap = new Map(); //to store working hours daily basis

while (totalEmployeeHrs <= 160 && day < MAX_NUM_OF_WORKING_DAYS) {
  day++;
  let empCheck = Math.floor((Math.random() * 10) % 3);
  let empHrs = getWorkingHours(empCheck);
  totalEmployeeHrs += empHrs;
  empDailyWageArr.push(calculateDailyWage(empHrs));
  empDailyWageMap.set(day, calculateDailyWage(empHrs));
  empDailyHrsMap.set(day, empHrs);
}

let empWage = calculateDailyWage(totalEmployeeHrs);
console.log(
  "Total working days: " +
    day +
    ", Employee working hrs per month: " +
    totalEmployeeHrs +
    " and Employee wage per month is: " +
    empWage
);

/**
 * total wage calculation using forEach method
 */
let totalWage = 0;

/**
 * calculates the total wage
 * @param {daily employee wage} dailyWage
 */
function sum(dailyWage) {
  totalWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log(
  "total days: " +
    day +
    ", total hrs: " +
    totalEmployeeHrs +
    ", employee wage: " +
    totalWage
);

/**
 * using reduce method
 */
function totalWages(totalWage, dailyWage) {
  return totalWage + dailyWage;
}
console.log(
  "employee wage with reduce method: " + empDailyWageArr.reduce(totalWages, 0)
);

/**
 * showing day with daily wage using Array map helper function
 */
let dailyCntr = 0;

/**
 * returns day and wage for that day
 * @param {*} dailyWage
 * @returns
 */
function mapDayWithWage(dailyWage) {
  dailyCntr++;
  return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArray = empDailyWageArr.map(mapDayWithWage);
console.log("Daily wage with day using map: " + mapDayWithWageArray);

/**
 * to show full working days
 */
// function fullTimeWage(dailyWage){
//   return dailyWage.includes("160");
// }

// let fullDailyWageArray =  mapDayWithWage.filter(fullTimeWage);//Need to revise
// console.log("Daily wage for full day work using filter: "+fullDailyWageArray);

/**
 * finds first full time working day
 */
// function findFullTimeWage(dailyWage) {
//   return dailyWage.includes("160");
// }
// console.log(
//   "first full time wage earned in  the day: " +
//     mapDayWithWageArray.find(findFullTimeWage)
// ); // same here: find not working

/**
 * checking if every element of full time wage is holding full time wage
 */
// function isAllFullTimeWage(dailyWage) {
//   return dailyWage.includes("160");
// }
// console.log(
//   "Check all elements have full time wage: " +
//     fullDailyWageArray.every(isAllFullTimeWage)
// );//error at 'every' function

/**
 * Check if there is any part time wage
 */
function isAnyPartTimeWage(dailyWage) {
  return dailyWage.includes("80");
}
console.log(
  "Check if any part time wage is there: " +
    mapDayWithWageArray.some(isAnyPartTimeWage)
);

/**
 * Finds the number of days that employee worked
 */
function totalDaysWorked(numOfDays, dailyWage) {
  if (dailyWage > 0) return numOfDays + 1;
  return numOfDays;
}
console.log(
  "number of days empliyee worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0)
);

/**
 * 8 Map functions
 */
console.log(
  "Emp wage map total hrs: " +
    Array.from(empDailyWageMap.values()).reduce(totalWages, 0)
);

/**
 * 9 Arrow functions
 */
const findTotal = (totalVal, dailyVal) => {
  return totalVal + dailyVal;
};

let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr
  .filter((dailyWage) => dailyWage > 0)
  .reduce(findTotal, 0);

console.log(
  "emp wage with arrow: \n Total hrs: " +
    totalHours +
    " and total wage: " +
    totalSalary
);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key, map) => {
  if (value == 8) fullWorkingDays.push(key);
  else if (value == 4) partWorkingDays.push(key);
  else nonWorkingDays.push(key);
});

console.log("full working days: " + fullWorkingDays);
console.log("part working days: " + partWorkingDays);
console.log("non working days: " + nonWorkingDays);
