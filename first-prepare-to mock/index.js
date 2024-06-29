//! ============Arrays (Lesson-16)======================

// TODO -- loop for and (to - from + 1/from + i)

// v1

// function getSpecialNumbers(from, to) {
//   const newArr = [];
//   for (let i = from; i <= to; i += 1) {
//     if (i % 3 === 0) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
// getSpecialNumbers(1, 2); // ==> [ ]

// v2

// function getSpecialNumbers(from, to) {
//   return new Array(to - from + 1)
//     .fill()
//     .map((_, i) => from + i)
//     .filter(el => el % 3 === 0);
// }

// console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
// console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
// console.log(getSpecialNumbers(1, 2)); // ==> [ ]

// TODO -- Spread and destructuring

// function swap(numbers) {
//   const [firstEl, ...rest] = numbers;
//   return [...rest, firstEl];
// }

// function swapManual(numbers) {
//   const newArr = [...numbers];
//   newArr.push(newArr.shift());
//   return newArr;
// }

// // examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
// console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]

//! ============Arrays Methods (Lesson-17)======================

// TODO -- Filter()

// const getSpecialNumbers = arr => arr.filter(num => num % 3 === 0);
// console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7])); // [3, 6]

// TODO -- Sort()

// const sortDesc = arr => arr.slice().sort((a, b) => b - a);
// console.log(sortDesc([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]

// TODO -- Flat()/Reduce()

// const flatArray = arr =>
//   arr
//     .reduce((acc, curr) => acc.concat(curr), [])
//     .flat(Infinity)
//     .sort((a, b) => a - b);

// console.log(flatArray([1, 2, [3], 4, [5, 6], 7, [10, [50, 30]]]));

// TODO -- allStudents/Reduce()

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
//   return allStudentsList.reduce((acc, curr) => {
//     if (!studentsForRetake.includes(curr)) {
//       acc.push(`Good job ${curr}`);
//     }
//     return acc;
//   }, []);
// };

// // examples
// const allStudTest1 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest1 = ['John', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest1, retakeStudTest1)); // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike'];
// console.log(getMessagesForBestStudents(allStudTest2, retakeStudTest2)); // ===> []

// TODO -- increaseEvent/Map()

// const increaseEventEl = (arr, delta) => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(num => (num % 2 === 0) + delta);
// };

// console.log(increaseEventEl([1, 2, 3, 4, 5, 6], 10));
// console.log(increaseEventEl([], 10));

// TODO -- cloneArr/...spread

// const cloneArr = arr => (Array.isArray(arr) ? [...arr] : null);

// console.log(cloneArr([1, 2, 3, 4, 5]));
// console.log(cloneArr('test'));

// TODO -- Withdraw

// const withdraw = (clients, balances, client, amount) => {
//   const indexClient = clients.indexOf(client);

//   if (balances[indexClient] < amount || indexClient === -1) {
//     return -1;
//   }

//   const newBalances = [...balances];
//   console.log((newBalances[indexClient] -= amount));
//   return newBalances;
// };

// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])

// TODO -- Reduce()

// const sum = arr => (Array.isArray(arr) ? arr.reduce((acc, curr) => acc + curr, 0) : null);
// console.log(sum([1, 2, 3, 4, 5]));
// console.log(sum([2, 5, 6, 3, 0, 3, -1]));
// console.log(sum('Test'));

// TODO -- Filter()

// const filterNames = (arr, text) => arr.filter(name => name.includes(text) && name.length > 5);

// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));

// TODO -- Average/Reduce()

// const arrAverage = arr => {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// };

// console.log(arrAverage([2, 5, 6, 3]));
// console.log(arrAverage('test'));

// TODO -- Square/Map()

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   return arr.map(num => num ** 2);
// }

// console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
// console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
// console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]

// TODO -- Reverse()

// const reverseArray = arr => (Array.isArray(arr) ? arr.slice().reverse() : null);
// console.log(reverseArray([1, 2, 3, 4, 5]));
