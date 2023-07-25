const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};

console.log(assertEqual(1, 1));

