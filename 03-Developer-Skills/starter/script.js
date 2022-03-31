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

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Define the problem
// Find the Diurnal Range/amplitude.
// What is an error and what do we do with it?

// 2. ways to solve the problem

// FEC Forward error correction - see error, and move to the next value
// find the highest temperature
// find the lowest temperature
// find the difference between the highest and lowest temperatures

const calcTempAmplitude = function (temps) {
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

const amplitude = calcTempAmplitude(temperatures);

console.log(
  `The difference between the warmest and coldest parts of the day is ${amplitude} degrees.`
);
