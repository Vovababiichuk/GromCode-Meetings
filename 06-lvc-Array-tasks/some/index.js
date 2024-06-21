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

// v2

// function getStatuses(res) {
//   const newArr = res.map((el, index, array) => (el >= 90 ? 'Passed' : 'Failed'));

//   return newArr;
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

// v3

// function getStatuses(res) {
//   return res.map(el => (el >= 90 ? 'Passed' : 'Failed'));
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

//! =====================validation: filter() vs some()=================

// algo
// 1. filter not valid elements
// 2. if length > 0 - not value

// v1 with check

// function getStatuses(res) {
// validation
//   //! filter - не підходить. Лишній синтаксис. І по швидкості повільніше і по памяті більше займе.
//   if (res.filter(el => el < 0 || el > 100).length > 0) {
//     return null;
//   }

//   const newArr = res.map(function (el, index, array) {
//     if (el >= 90) {
//       return 'Passed';
//     }
//     return 'Failed';
//   });
//   return newArr;
// }

// console.log(getStatuses([25, 40, 74, 58, 100, 5]));
// console.log(getStatuses([25, 40, 74, 58, 100, 5, -1]));
// console.log(getStatuses([1000, 450]));
// console.log(getStatuses([]));

//! ===============================some()=================

// v2
// some - тут краще

function getStatuses(res) {
  if (res.some(el => el < 0 || el > 100)) {
    return null;
  }

  return res.map(el => (el >= 90 ? 'Passed' : 'Failed'));
}

console.log(getStatuses([25, 40, 74, 58, 100, 5]));
console.log(getStatuses([25, 40, 74, 58, 100, 5, -1]));
console.log(getStatuses([1000, 450]));
console.log(getStatuses([]));
