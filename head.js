const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};

function head(array) {
  if (Array.isArray(array) && array.length > 0) {
    return array[0];
  } else {
    return undefined; 
  }
}

const arr = [1, 2, 3, 4, 5];
const firstItem = head(arr);
console.log(firstItem)

console.log(assertEqual(head([5,6,7]), 6));
