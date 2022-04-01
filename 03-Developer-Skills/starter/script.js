// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const y = 42;

// if (x === 42) {
//   console.log("Yes, that's the answer!");
// }

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1937));

// Problem 1:

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Define the problem
// Find the Diurnal Range/amplitude.
// What is an error and what do we do with it?

// 2. ways to solve the problem

// FEC Forward error correction - see error, and move to the next value
// find the highest temperature
// find the lowest temperature
// find the difference between the highest and lowest temperatures

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = temps[i];
//     if (currentTemp < min) min = temps[i];
//   }
//   console.log(`max: ${max} and min: ${min}`);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);

// console.log(
//   `The difference between the warmest and coldest parts of the day is ${amplitude} degrees.`
// );

// Problem 2:
// Function should now receive two arrays, one of temperatures and one of dates.
/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = temps[i];
    if (currentTemp < min) min = temps[i];
  }
  console.log(`max: ${max} and min: ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(
  [12, 5, 6, 3, 4, 8],
  [1, 2, 3, 4, 5, 6]
);

console.log(
  `The difference between the warmest and coldest parts of the day is ${amplitudeNew} degrees.`
);
*/

// const measureKelving = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'C',
//     value: prompt('What is the temperature? Please use a number.'),
//   };
//   // const kelvin = measurement.value + 273.15;
//   const kelvin = parseInt(measurement.value) + 273.15;
//   return kelvin;
// };

// console.log(measureKelving());

// I added parseInt to the measurement.value to change its type to number.

// Developer Skills and Editor Setup
// Coding Challenge #1

/*
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems
*/

// Take each item and add a string to the array item
// for each string we need to increase by one

const data1 = [17, 21, 23];
const data2 = [12, 5, 0, 4];
var day = 'day';

// const printForecast = data1 => {
//   for (let i = 0; i < data1.length; i++) {
//     const currentTemp = data1[i];
//     console.log(`... ${currentTemp}°C in ${i + 1} day`);
//   }
// };

// const printForecast2 = data2 => {
//   for (let i = 0; i < data2.length; i++) {
//     const currentTemp = data2[i];
//     console.log(`... ${currentTemp}°C in ${i + 1} day`);
//   }
// };

// console.log(printForecast(data1));
// console.log(printForecast2(data2));

// Course Solution:
// var day = function () {
//   if ((day = [i + 1] == 1)) {
//     return 'day';
//   } else {
//     return 'days';
//   }
// };

const printForecast = function (arr) {
  let str = ''; // empty string
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days\n`;
  }
  console.log(str);
};
printForecast(data1);
