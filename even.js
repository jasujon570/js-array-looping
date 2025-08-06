// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];
// using for of loop

const evenNumbers = [];
for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}
console.log(evenNumbers);

// using for loop

const getEvenNumber = [];
for (n = 0; n < numbers.length; n++) {
  if (numbers[n] % 2 === 0) {
    getEvenNumber.push(numbers[n]);
  }
}
console.log(getEvenNumber);
