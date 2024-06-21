//! filter() - є масив і потрібно отримати урізаний масив.
//! map() - є масив одного вигляду потрібно отримати масив іншого вигляду (такої самої довжини).
//! reduce - коли потрібно отримати один цільний результат... Є масив чисел - отримати обьект. Є масив - отримати число. Reduce - переводиться зменшити звузити....
//! Також подивитися чи мап чи фільтер підходить, якщо ні - то скоріше редюс... крім простих варіантів де потрібно tru or false...

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

function calcExpenses(transactions) {
  return Math.abs(transactions.reduce((acc, el, index) => (el < 0 ? acc + el : acc), 0));
}

// examples
console.log(calcExpenses([25, 40, -74, 58, -100, -5])); // returns ==> 179
console.log(calcExpenses([5000, 450])); // returns ==> 0
console.log(calcExpenses([-50, -75, -100]));
