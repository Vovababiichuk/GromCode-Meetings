// input: arr, arr
// output: object

// algo
// 1. create obj
// 2. iterate keysList. get key/value by index
// 3. add key/value to obj

// v1

// function buildObject(keysList, valuesList) {
//   let obj = {};
//   for (let i = 0; i < keysList.length; i += 1) {
//     const key = keysList[i];
//     const value = valuesList[i];
//     obj = { ...obj, [key]: value };
//   }
//   return obj;
// }

// v2

// function buildObject(keysList, valuesList) {
//   keysList.reduce((obj, key, index) => {
//     const value = valuesList[index];
//     return { ...obj, [key]: value };
//   } {});
// }

// v3

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Vasyl', 'Ukraine', 34];
console.log(buildObject(keys, values)); // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }

console.log(buildObject(['brand', 'model', 'year'], ['Toyota', 'Corolla', 2022]));

console.log(buildObject(['country', 'city', 'population'], ['Japan', 'Tokyo', 13929286]));
