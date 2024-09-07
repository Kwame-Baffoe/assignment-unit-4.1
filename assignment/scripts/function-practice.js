console.log('***** Function Practice *****');

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return a personalized hello, using the `name` argument.
function helloName(name) {
  return `Hello, ${name}!`;
}
// Test the function with a name
console.log('Test - personalized hello:', helloName('Jo'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
// Test the function with two numbers
console.log('Test - adding numbers:', addNumbers(5, 3));  // Expected result: 8


// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
// Test the function with three numbers
console.log('Test - multiplying numbers:', multiplyThree(2, 3, 4));  // Expected result: 24


// 5. Function that will return true if a number is positive, or false otherwise
function isPositive(number) {
  return number > 0;
}
// Call the function to test each outcome (true & false)
console.log('Test - positive number (should be true):', isPositive(5));   // true
console.log('Test - negative number (should be false):', isPositive(-5)); // false


// 6. Function to return the _last_ item in an array. If the array is empty, return `undefined`.
function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return undefined;
}
// Test with non-empty and empty arrays
console.log('Test - last item in array:', getLast([1, 2, 3]));  // Expected: 3
console.log('Test - empty array:', getLast([]));                // Expected: undefined


// 7. Function to find a value in an array. Return true if the value is found, false otherwise.
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
// Test the function
console.log('Test - find value (should be true):', find(2, [1, 2, 3]));  // Expected: true
console.log('Test - find value (should be false):', find(4, [1, 2, 3])); // Expected: false


// ----------------------
// Stretch Goals
// ----------------------

// 8. Function to check if a letter is the first letter in a string.
function isFirstLetter(letter, string) {
  return string[0] === letter;
}
// Test the function
console.log('Test - is first letter (should be true):', isFirstLetter('a', 'apple'));   // Expected: true
console.log('Test - is first letter (should be false):', isFirstLetter('b', 'apple'));  // Expected: false


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
// Test the function
console.log('Test - sum all numbers in array:', sumAll([1, 2, 3, 4]));  // Expected: 10


// 10. Function to return a new array of all positive numbers contained in an input array.
// If there are no positive numbers, return an empty array.
function allPositive(array) {
  let positiveNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positiveNumbers.push(array[i]);
    }
  }
  return positiveNumbers;
}
// Test the function
console.log('Test - all positive numbers:', allPositive([1, -2, 3, -4, 5]));  // Expected: [1, 3, 5]
console.log('Test - no positive numbers:', allPositive([-1, -2, -3]));        // Expected: []


// 11. CodeWars Problem - Catching Car Mileage Numbers (described in the comment)
// This function checks if a mileage number is "interesting" based on custom rules.
// Example: If the mileage is all zeros or repeated digits, it will return 2, otherwise 0.

function isInteresting(mileage) {
  const strMileage = String(mileage);
  // Simple rule: If mileage consists of the same repeated digit, it's "interesting"
  if (/^(\d)\1*$/.test(strMileage)) {
    return 2;
  }
  return 0;
}
// Test the function
console.log('Test - interesting mileage (should be 2):', isInteresting(7777)); // Expected: 2
console.log('Test - non-interesting mileage (should be 0):', isInteresting(1234)); // Expected: 0




// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// codewars.com Problem - Catching Car Mileage Numbers
// Description is copied and pasted 
// "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

// Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

// It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
