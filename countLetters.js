const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};

let sentence = "The function should" 

const countLetters = function (words){
const strLowercase = words.toLowerCase();
let result = {};
for (const letter of strLowercase) {
  if (result[letter] === undefined){
    result[letter] = 1;
  } else {
    result[letter]++
  }
}
return result
}
console.log(countLetters(sentence));