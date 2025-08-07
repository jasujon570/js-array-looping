const statement = "I am a hard working person";

const words = statement.split(" ");
const reversedWords = [];

for (let i = 0; i < words.length; i++) {
  // reversedWords[words.length - 1 - i] = words[i];
  reversedWords.unshift(words[i]);
}

let final = reversedWords.join(" ");
console.log(final);

// for..of loop

const str = "I am a hard working person";
const strWords = str.split(" ");
const reverseWord = [];

for (const word of strWords) {
  reverseWord.unshift(word);
}

reversed = reverseWord.join(" ");
console.log(reversed);

// while loop
let j = 0;
while (j < strWords) {
  reverseWord.unshift(j);
  j++;
}

let result = reverseWord.join(" ");
console.log(result);

// manual for loop

let sentence = "I love JavaScript";
let convertToWords = sentence.split(" "); // Converts the string into an array
let reversedSentence = '';

for (let i = convertToWords.length - 1; i >= 0; i--) {
  reversedSentence += convertToWords[i];
  if(i > 0){
    reversedSentence +=' ';
  }

}

console.log(reversedSentence);
