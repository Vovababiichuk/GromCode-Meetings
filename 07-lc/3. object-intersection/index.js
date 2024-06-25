// input: obj, obj
// output: obj

// algo
// 1. iterate two obj
// 2. compare key/value
// 3. return obj with simulate key/vale

// v1

// function objIntersection(firstObj, secondObj) {
//   const newObj = {};
//   const firstObjkeys = Object.keys(firstObj);

//   for (let key of firstObjkeys) {
//     if (firstObj[key] === secondObj[key]) {
//       newObj[key] = firstObj[key];
//     }
//   }

//   return newObj;
// }

// v2

function objIntersection(firstObj, secondObj) {
  const firstObjkeys = Object.keys(firstObj);
  return firstObjkeys.reduce((obj, key) => {
    if (firstObj[key] === secondObj[key]) {
      return { ...obj, [key]: firstObj[key] };
    }
    return obj;
  }, {});
}

// examples
// #1
const obj1 = { id: 1, points: 2, signature: 'saas' };
const obj2 = { id: 1, points: 5, signature: 'teewe' };
console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// #2
const obj3 = { id: 1, points: 2, signature: 'eeew' };
const obj4 = { signature: 'eeew' };
console.log(objIntersection(obj3, obj4)); // returns ==> { sihnature: 'eeew' }

// #3
const obj5 = { id: 1, points: 2, signature: 'eeew' };
const obj6 = { width: 100, height: 200 };
console.log(objIntersection(obj5, obj6)); // returns ==> {}
