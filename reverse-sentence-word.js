// const statement = "I am a hard working person";

// const words = statement.split(" ");
// const reversedWords = [];

// for (let i = 0; i < words.length; i++) {
//   // reversedWords[words.length - 1 - i] = words[i];
//   reversedWords.unshift(words[i]);
// }

// let final = reversedWords.join(" ");
// console.log(final);

// // for..of loop

// const str = "I am a hard working person";
// const strWords = str.split(" ");
// const reverseWord = [];

// for (const word of strWords) {
//   reverseWord.unshift(word);
// }

// reversed = reverseWord.join(" ");
// console.log(reversed);

// // while loop
// let j = 0;
// while (j < strWords) {
//   reverseWord.unshift(j);
//   j++;
// }

// let result = reverseWord.join(" ");
// console.log(result);

// // manual for loop

// let sentence = "I love JavaScript";
// let convertToWords = sentence.split(" "); // Converts the string into an array
// let reversedSentence = '';

// for (let i = convertToWords.length - 1; i >= 0; i--) {
//   reversedSentence += convertToWords[i];
//   if(i > 0){
//     reversedSentence +=' ';
//   }

// }

// console.log(reversedSentence);

// // using .split(), .reverse() and join()

// let myStr = 'I will be a web developer one day';

// let reversedMyStr = myStr.split(' ').reverse().join(' ');

// console.log(reversedMyStr);

// My experiment

let sequences = "one two three four five";

let reversedSequence = sequences.split(" ").reverse().join(" ");
console.log(reversedSequence);

let sentenceOfWord = sequences.split(" "); //convert string to array
let reservedSequence = []; //reserved the reversed array value into the variable
for (let sequence of sentenceOfWord) { //for of loop
  reservedSequence.unshift(sequence); //reverse the value
}
console.log(reservedSequence.join(" "));

// for loop
let reservedValue = [];
for (i = 0; i < sentenceOfWord.length; i++) {
  reservedValue.unshift(sentenceOfWord[i]);
}

console.log(reservedSequence.join(" "));

// using while loop

let n = 0;
let value = [];
while (n < sentenceOfWord.length){
    value.unshift(sentenceOfWord[n])
    n++;
}
console.log(value.join(' '));

