//! filter() - є масив і потрібно отримати урізаний масив.
//! map() - є масив одного вигляду потрібно отримати масив іншого вигляду (такої самої довжини).
//! reduce - коли потрібно отримати один цільний результат... Є масив чисел - отримати обьект. Є масив - отримати число. Reduce - переводиться зменшити звузити....
//! Також подивитися чи мап чи фільтер підходить, якщо ні - то скоріше редюс... крім простих варіантів де потрібно tru or false...

//! ===============================map()=================

// input: callback, this (optional)
// output: array

// callback:
// input: element (num), index (optional), array (optional)
// output: element (string)

// v1

// function getStatuses(res) {
//   const newArr = res.map(function (el, index, array) {
//     if (el >= 90) {
//       return 'Passed';
//     }
//     return 'Failed';
//   });
//   return newArr;
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

//! ===============================filter()=================

// algo
// 1. filter not valid elements
// 2. if length > 0 not value

// v1 with check

// function getStatuses(res) {
//   //! filter - не підходить. Лишній синтаксис. І по швидкості повільніше і по памяті більше займе.
// check
//   if (res.filter(el => el < 0 || el > 100).length > 0) {
//     return null;
//   }

//   res.filter((el, index, arr) => {
//     arr[index] = el >= 90 ? 'Passed' : 'Failed';
//     return true;
//   });
//   return res;
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([25, 40, 74, 58, 100, 5, -1]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

//! ===============================some()=================

// v2
// some - тут краще

// function getStatuses(res) {
//   if (res.some(el => el < 0 || el > 100)) {
//     return null;
//   }

//   return res.map(el => (el >= 90 ? 'Passed' : 'Failed'));
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([25, 40, 74, 58, 100, 5, -1]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

//! ====================reduce()==============================

// input: callback, initialValue(optional) this (option)
// output: anything

// callback:
// input: (acc, el, index (optional), array (optional))
// output: new acc (any)

// algo v1 - bad
// 1. filter expences
// 2. abs make positive
// 3. sum

// algo v2 - good
// 1. iterate elements
// 2. sum expenses
// 3. make sum positive

// reduce
// acc - змінна куда ми складаємо результат
// акамулятор приймає результат колбека
// якщо не задамо initialValue = 0 то на першій ітерації буде вже 40 а не 25

// function calcExpenses(transactions) {
//   const res = transactions.reduce((acc, el, index) => {
// debug;
//     console.log('STEP ' + index);
//     console.log('acc ' + acc);
//     console.log('acc ' + el);

//     return el < 0 ? acc + el : acc;
//   }, 0);

//   console.log('res', res);
// }

// testing
// calcExpenses([25, 40, -74, 58, -100, -5]); // returns ==> 179
// calcExpenses([5000, 450]); // returns ==> 0

//! ================================Optimization========================

// function calcExpenses(transactions) {
//   return Math.abs(transactions.reduce((acc, el, index) => (el < 0 ? acc + el : acc), 0));
// }

// examples
// console.log(calcExpenses([25, 40, -74, 58, -100, -5])); // returns ==> 179
// calcExpenses([5000, 450]); // returns ==> 0

//! ===============================Simulate filter()==================

// algo
// 0. create empty arr
// 1. iterate arr
// 2. apply callback for each element
// 3. if callback true -> push to new

// input: arr, callback
// output: arr

// callback:
// input: element, index, array
// output: bool

// const filterArrayElements = (arr, callback) => {
//   const res = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (callback(arr[i], i, arr)) {
//       res.push(arr[i]);
//     }
//   }

//   return res;
// };

// // testing
// const test = [1, 10, 5, 7];
// console.log(filterArrayElements(test, el => el > 5));
// console.log(filterArrayElements(test, (el, i) => i > 1 && el > 5));

// =================Home Work=============
// https://gromcode.com/ua/courses/javascript-practice/tasks/3892?step=practice
// https://gromcode.com/ua/courses/javascript-practice/tasks/3893?step=practice
// https://gromcode.com/ua/courses/javascript-practice/tasks/3271?step=practice
// https://gromcode.com/ua/courses/javascript-practice/tasks/3270?step=practice
