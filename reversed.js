const colors = ["red", "blue", "green", "yellow", "orange"];
const reverseArray = [];

// using for loop
for (i = 0; i < colors.length; i++) {
  reverseArray.unshift(colors[i]);
}
console.log(reverseArray);


// using while loop
let n = 0;
while(n<colors.length) {
    reverseArray.unshift(colors[n]);
    n++;
}
console.log(reverseArray);

// using for...of 

const reversed = [];
for (const color of colors){
    reversed.unshift(color);
}
console.log(reversed);