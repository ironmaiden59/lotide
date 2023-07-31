const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};



module.exports = assertEqual;