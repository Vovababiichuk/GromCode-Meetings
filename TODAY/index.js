//! Task1
// function getRepetitiveChars(word) {
//   const chars = word.split('');

//   const repeatedChars = chars.filter((char, index, arr) => arr.indexOf(char) !== index);

//   const uniqueRepeatedChars = [...new Set(repeatedChars)];

//   return uniqueRepeatedChars;
// }

// // // приклади
// console.log(getRepetitiveChars('hello')); // повертає ===> ['l']
// console.log(getRepetitiveChars('intuition')); // повертає ===> ['i', 't', 'n']
// console.log(getRepetitiveChars('abracadabra')); // повертає ===> ['a', 'b', 'r', 'c', 'd']

// function getRepetitiveChars(word) {
//   const lowerCaseWord = word.toLowerCase();
//   const chars = lowerCaseWord.split('');

//   const repeatedChars = chars.filter((char, index, arr) => arr.indexOf(char) !== index);

//   const uniqueRepeatedChars = [...new Set(repeatedChars)];

//   return uniqueRepeatedChars;
// }

// // приклади
// console.log(getRepetitiveChars('hello')); // повертає ===> ['l']
// console.log(getRepetitiveChars('intuition')); // повертає ===> ['i', 't', 'n']
// console.log(getRepetitiveChars('abracadabra')); // повертає ===> ['a', 'b', 'r', 'c', 'd']
// console.log(getRepetitiveChars('programming')); // повертає ===> ['r', 'g', 'm']
// console.log(getRepetitiveChars('sErveR')); // повертає ===> ['e', 'r']

// function getRepetitiveChars(word) {
//   const lowerCaseWord = word.toLowerCase();
//   const chars = lowerCaseWord.split('');

//   // Фільтруємо символи, які повторюються
//   const repeatedChars = chars.filter((char, index, arr) =>
//     arr.indexOf(char) !== index && arr.lastIndexOf(char) === index
//   );

//   // Видаляємо дублікати
//   const uniqueRepeatedChars = [...new Set(repeatedChars)];

//   return uniqueRepeatedChars;
// }

// console.log(getRepetitiveChars('hello')); // повертає ===> ['l']
// console.log(getRepetitiveChars('intuition')); // повертає ===> ['i', 't', 'n']
// console.log(getRepetitiveChars('abracadabra')); // повертає ===> ['a', 'b', 'r', 'c', 'd']
// console.log(getRepetitiveChars('programming')); // повертає ===> ['r', 'g', 'm']
// console.log(getRepetitiveChars('sErveR')); // повертає ===> ['e', 'r']

// function getRepetitiveChars(word) {
//   // Перетворюємо слово в нижній регістр
//   const lowerCaseWord = word.toLowerCase();
//   const chars = lowerCaseWord.split('');

//   // Підраховуємо кількість кожного символу
//   const charCount = chars.reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   // Збираємо символи, які повторюються
//   const repeatedChars = chars.filter((char, index, arr) =>
//     charCount[char] > 1 && arr.indexOf(char) === index
//   );

//   return repeatedChars;
// }

// console.log(getRepetitiveChars('hello')); // повертає ===> ['l']
// console.log(getRepetitiveChars('intuition')); // повертає ===> ['i', 't', 'n']
// console.log(getRepetitiveChars('abracadabra')); // повертає ===> ['a', 'b', 'r', 'c', 'd']
// console.log(getRepetitiveChars('programming')); // повертає ===> ['r', 'g', 'm']
// console.log(getRepetitiveChars('sErveR')); // повертає ===> ['e', 'r']

// function getRepetitiveChars(word) {
//   // Перетворюємо слово в нижній регістр
//   const lowerCaseWord = word.toLowerCase();

//   // Підраховуємо кількість кожного символу
//   const charCount = {};
//   lowerCaseWord.split('').forEach(char => {
//     charCount[char] = (charCount[char] || 0) + 1;
//   });

//   // Фільтруємо символи, які повторюються і зберігаємо їх у правильному порядку
//   const repeatedChars = [];
//   const seen = new Set();

//   lowerCaseWord.split('').forEach(char => {
//     if (charCount[char] > 1 && !seen.has(char)) {
//       repeatedChars.push(char);
//       seen.add(char);
//     }
//   });

//   return repeatedChars;
// }

// // приклади
// console.log(getRepetitiveChars('hello')); // повертає ===> ['l']
// console.log(getRepetitiveChars('intuition')); // повертає ===> ['i', 't', 'n']
// console.log(getRepetitiveChars('abracadabra')); // повертає ===> ['a', 'b', 'r', 'c', 'd']
// console.log(getRepetitiveChars('programming')); // повертає ===> ['r', 'g', 'm']
// console.log(getRepetitiveChars('sErveR')); // повертає ===> ['e', 'r']

//! Task2

// const apiUrl = 'https://appco-snowy.vercel.app/api/users/statistics';

// const getUsersStat = userIds => {

// };

// // examples
// // getUsersStat(); // return ==> null
// // getUsersStat([]); // ==> alert with message 'Bad request error. Check request and try again'
// console.log(getUsersStat([3])); //  ==> console.log with data ([{ user_id: 3, date: '2019-10-17', page_views: 769, clicks: 103 }, ..., ...])

// const apiUrl = 'https://appco-snowy.vercel.app/api/users/statistics';

// const getUsersStat = (userIds) => {
//     if (!userIds) {
//         return null;
//     }
//     if (userIds.length === 0) {
//         alert('Bad request error. Check request and try again');
//         return;
//     }

//     const queryParams = userIds.map(id => `userId=${id}`).join('&');
//     const url = `${apiUrl}?${queryParams}`;

//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             return data;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//         });
// };

// // examples
// console.log(getUsersStat()); // return ==> null
// console.log(getUsersStat([])); // ==> alert with message 'Bad request error. Check request and try again'
// console.log(getUsersStat([3])); // ==> console.log with data ([{ user_id: 3, date: '2019-10-17', page_views: 769, clicks: 103 }, ..., ...])

//! Task3
//! Task3
//! Task3

//! ==================setTimeout======================

// function throttle(func, wait) {
//   let shouldThrottle = false;

//   return function (...args) {
//     if (wait === 0) {
//       return func.apply(this, args);
//     }

//     if (!shouldThrottle) {
//       shouldThrottle = true;
//       setTimeout(() => {
//         shouldThrottle = false;
//       }, wait);
//       return func.apply(this, args);
//     }
//   };
// }

//! ===============================Date.now()=========================

function throttle(func, wait) {
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCallTime >= wait) {
      lastCallTime = now;
      return func.apply(this, args);
    }
  };
}

const log = throttle(() => console.log('Hello!'), 1000);
log(); // Will log 'Hello!'
log(); // Will be ignored
log(); // Will be ignored

const log2 = throttle(() => console.log('Without delay!'), 0);
log2(); // Will log 'Without delay!'
log2(); // Will log 'Without delay!'
log2(); // Will log 'Without delay!'

const sum = (a, b) => a + b;
const throttledSum = throttle(sum, 1000);

console.log(throttledSum(7, 3)); // 10 (first call, executed)
console.log(throttledSum(2, 2)); // 10 (ignored, returns last result)
console.log(throttledSum(1, 1)); // 10 (ignored, returns last result)
setTimeout(() => console.log(throttledSum(7, 3)), 1500); // 10 (new execution after wait period)
