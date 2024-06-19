// 

// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

// How to work on tech tasks. Step by step guide

// ==================================================

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++ Як ви будете реалізовувати те що від вас вимагається...
// 3. Write draft solution & testing - CODE Чорновий варіант... відразу тестуємо...
// 4. Refactoring & final testing -> final solution А чи можна мені код покращити

// grocery
// 1. get shop location
// 2. plan your route
// 3. go to the shop
// 4. plan your route back

// =====================================================

// https://gromcode.com/ua/courses/javascript-full/tasks/2621?step=practice

// input: number
// output: undefined - нічого не повертає а в умові виводить...

// algo
// 1. iterate from 1 to num
// 2. check if number is prime
// 2.1 iterate from 2 to n
// 2.2 check if n % i === 0 -> isNotPrime
// 2.3 in other case -> isPrime
// 3. if prime -> print it

// 7
// 7 % 2; 7 % 3; 7% 4; 7 % 5; 7 % 6 -> isPrime

// algo
// counter = 0;
// 7 % 2; 7 % 3; 7% 4; 7 % 5; 7 % 6
// if (7 % i === 0) counter++
// if(counter > 0) -> isPrime

// Якщо алгоритм лишні дії робить то не норм

// input: number
// boolean

// function isPrime(n) {
//   for (let i = 2; i < n; i += 1) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function getPrimes(num) {
//   for (let n = 2; n <= num; n += 1) {
//     if (isPrime(n)) {
//       console.log(n);
//     }
//   }
// }

// console.log(getPrimes(10));

// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     let isPrime = true;
//     for (let n = 2; n < i; n += 1) {
//       if (i % n === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// getPrimes(10);
