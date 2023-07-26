const assertEqual = function (actual, expected){
  if (actual === expected) return "Assertion Passed";
  if (actual !== expected) return "Assertion Failed";
   
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count


const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
    if (result[item]){
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  console.log(item);
  
}
return result
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));