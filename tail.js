const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};

function tail(array) {
  if (Array.isArray(array) && array.length > 1) {
    return array.slice(1);
  } else {
    return []; // Return an empty array if the input array is empty or has only one element
  }
}



