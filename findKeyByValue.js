// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.



const findKeyByValue = function (obj, val) {
 for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    if (obj[key] === val) {
      return key
    }
    
  }
 }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
  