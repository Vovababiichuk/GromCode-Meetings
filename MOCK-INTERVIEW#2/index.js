// ==========================1==================
// ==========================1==================
// ==========================1==================

// function objIntersection(firstObj, secondObj) {
//   // put your code here
//   return Object.keys(firstObj).reduce((acc, key) => {
// 		console.log(secondObj[key]);
// 		if (firstObj[key] === secondObj[key]) {
// 			return { ...acc, [key]: firstObj[key] };
// 		}
// 		return acc;
//   }, {});
// }

// // examples
// // #1
// const obj1 = { id: 1, points: 2, signature: 'saas' };
// const obj2 = { id: 1, points: 5, signature: 'teewe' };
// console.log(objIntersection(obj1, obj2)); // returns ==> { id: 1 }

// // #2
// const obj3 = { id: 1, points: 2, signature: 'eeew' };
// const obj4 = { signature: 'eeew' };
// objIntersection(obj3, obj4); // returns ==> { sihnature: 'eeew' }

// // #3
// const obj5 = { id: 1, points: 2, signature: 'eeew' };
// const obj6 = { width: 100, height: 200 };
// objIntersection(obj5, obj6); // returns ==> {}

// =======================2=====================
// ======================2======================

// function calcSalesByCompany(data, year) {
//   // put your code here
//   return data.reduce((acc, item) => {
//     if (!year || item.year === year) {
//       const { company, salesCount } = item;
//       if (!acc[company]) {
//         acc[company] = 0;
//       }
//       acc[company] += salesCount;
//     }
//     return acc;
//   }, {});
// }

// // examples
// const data = [
//   { company: 'Honda', model: 'Civic', salesCount: 5000, month: 'Mar', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 84456, month: 'Jun', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 100520, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Mar', year: 2021 },
//   { company: 'Honda', model: 'Accord', salesCount: 113265, month: 'Dec', year: 2021 },
//   { company: 'Honda', model: 'Civic', salesCount: 105749, month: 'Jul', year: 2021 },
//   { company: 'Ford', model: 'Fusion', salesCount: 53666, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Jan', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Mustang', salesCount: 113953, month: 'Sep', year: 2022 },
//   { company: 'Honda', model: 'Civic', salesCount: 70496, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 64948, month: 'Feb', year: 2022 },
//   { company: 'Nissan', model: 'Leaf', salesCount: 92658, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'Camry', salesCount: 82038, month: 'May', year: 2023 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 84580, month: 'Nov', year: 2023 },
// ];

// console.log(calcSalesByCompany(data, 2021)); // returns ==> { Toyota: 190620, Honda: 219014, Ford: 53666 }
// console.log(calcSalesByCompany(data, 2023)); // returns ==> { Toyota: 190620, Honda: 219014, Ford: 53666 }
// console.log(calcSalesByCompany(data)); // returns ==> { Honda: 294510, Toyota: 596742, Ford: 347819, Nissan: 92658 }

// ======================3======================
// ======================3======================
// ======================3======================

// function calcSalesByCompany(data, year) {
//   // put your code here
//   const salesCompany = data.reduce((acc, el) => {
//     if (!year || el.year === year) {
//       const { company, salesCount } = el;
//       if (!acc[company]) {
//         acc[company] = 0;
//       }
//       acc[company] += salesCount;
//     }
//     return acc;
//   }, {})

//   return Object.entries(salesCompany)
//     .map(([company, salesCount]) => ({ company, salesCount }))
// };

// // examples
// const data = [
//   { company: 'Honda', model: 'Civic', salesCount: 5000, month: 'Mar', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 84456, month: 'Jun', year: 2020 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 100520, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Mar', year: 2021 },
//   { company: 'Honda', model: 'Accord', salesCount: 113265, month: 'Dec', year: 2021 },
//   { company: 'Honda', model: 'Civic', salesCount: 105749, month: 'Jul', year: 2021 },
//   { company: 'Ford', model: 'Fusion', salesCount: 53666, month: 'Jan', year: 2021 },
//   { company: 'Toyota', model: 'Corolla', salesCount: 90100, month: 'Jan', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Focus', salesCount: 90100, month: 'Dec', year: 2022 },
//   { company: 'Ford', model: 'Mustang', salesCount: 113953, month: 'Sep', year: 2022 },
//   { company: 'Honda', model: 'Civic', salesCount: 70496, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 64948, month: 'Feb', year: 2022 },
//   { company: 'Nissan', model: 'Leaf', salesCount: 92658, month: 'Feb', year: 2022 },
//   { company: 'Toyota', model: 'Camry', salesCount: 82038, month: 'May', year: 2023 },
//   { company: 'Toyota', model: 'RAV4', salesCount: 84580, month: 'Nov', year: 2023 },
// ];

// console.log(calcSalesByCompany(data, 2021));

// ======================4======================
// ======================4======================
// ======================4======================

// function getUserEndpoints(data, userId) {
//   // put your code her
//   if (!userId) {
//     return null
//   }

//   if (data.length === 0) {
//     return []
//   }

//   return data
//     .filter(({ id }) => id === userId)
//     .map(({ endpoint }) => endpoint.replace('{userId}', userId))
// }

// // examples
// console.log(
//   getUserEndpoints(
//     [
//       { id: 1001, endpoint: '/api/users/{userId}/data' },
//       { id: 4422, endpoint: '/api/users/data' },
//       { id: 1001, endpoint: '/api/users/location' },
//       { id: 9999, endpoint: '/api/users/{userId}/validation' },
//       { id: 4422, endpoint: '/api/users/{userId}/validation' },
//     ],
//     4422
//   )
// ) // ===> ['/api/users/data', '/api/users/4422/validation']
// console.log(getUserEndpoints([], 4422)) // ===> ['/api/users/data', '/api/users/4422/validation']
// console.log(getUserEndpoints([])) // ===> ['/api/users/data', '/api/users/4422/validation']

// ======================4======================
// ======================4======================

function findMissingIds(ids) {
  const minId = Math.min(...ids);
  const maxId = Math.max(...ids);

  const allIds = [];
  for (let i = minId; i <= maxId; i += 1) {
    allIds.push(i);
  }

  // const allIds = Array(maxId - minId + 1).fill().map((_, index) => minId + index);

  const missingIds = allIds.filter(id => !ids.includes(id));

  return missingIds;
}

// Examples
console.log(findMissingIds([1, 2, 4, 5])); // ===> [3]
console.log(findMissingIds([10, 13, 14])); // ===> [11, 12]
console.log(findMissingIds([20, 18, 17, 14])); // ===> [15, 16, 19]
