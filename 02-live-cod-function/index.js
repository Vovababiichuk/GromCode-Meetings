/*
 * ф-ция getSenseOfLife не должна принимать аргументы
 * ф-ция getSenseOfLife должна вернуть число 42
 */

// ф-я завжди повертає результат... або undefined or те що ми сказали
// ф-я складається з 3 частин - імя параметри боді
// щоб побачити що ф-я повертає кладемо в змінну

// function getSenseOfLife() {
// 	console.log(42)
// }

// console.log(getSenseOfLife());

//! ===========================

/* ф-ция getSquared должна принимать число и вернуть квадрат этого числа */

// function getSquared(num) {
// 	return num ** 2
// }

// // testing
// // тестувати код постійно потрібно

// console.log(getSquared(5))
// console.log(getSquared(-4))
// console.log(getSquared(0))

//! ===========================
/*
 * ф-ция printMsg должна принимать число
 * ф-ция printMsg должна вывести в консоль строку 'I am 34 years old'
 * где 34 - число, полученное в аргументах
 */

// function printMsg(num) {
// 	console.log(`I am ${num} years old`)
// }

// console.log(printMsg('34'))
// console.log(printMsg(-3))
// console.log(printMsg(0))

//! ===========================

// В ф-ї може бути багато реторнів але виконається тільки один... перший...
// реторни як правило в if умовах лежать
// багато реторнв не хорошо - 2 3

// function getMsg(age) {
// 	if (age < 18) {
// 		return null
// 	}
// 	return `I am ${age} years old`
// }

// console.log(getMsg('34'))
// console.log(getMsg(-3))
// console.log(getMsg(0))
// console.log(getMsg(10))

// ! ===========================

// структурує код - призначення ф-ї
// перевикористання логіки яка написана в одному місці

// для структурування коду
// реюзати те що ми вже написали

// !==============================String==============

/* ф-ция mult должна принимать два числа и вернуть их произведение */

// const mult = (num1, num2) => num1 * num2

// console.log(mult(5, 5))
// console.log(mult('2', 3))
// console.log(mult(2, -3))
// console.log(mult('2', '4'))
// console.log(mult(true, 5))

// краще працює з контекстом ... використовує парент контекст...
// ! придумали стрілочну ф-ю для КОЛБЕКУ!!!!!!!!!!!!!
// якщо тіло ф-ї з одної команди то ретурн слово можна опустити

/* ф-ция square должна принимать число и вернуть его, возведенное в квадрат */

// ... code here

// const squared = (num) => {
// 	return num ** 2;
// }

// const square = num => num ** 2

// console.log(square(5))
// console.log(square('4', true))
// console.log(square(0))

// !======================

// const getMagicNumber = () => 17;

// console.log(getMagicNumber())
// console.log(getMagicNumber('Hello'))

// !!==============Функція викликає іншу ф-ю

// const sum = (a, b) => a + b;
// const diff = (a, b) => a - b;
// const mult = (a, b) => a * b;

// const mathFunc = (a, b) => {
// 	return sum(a, b) + mult(a, b) + diff(a, b);
// }

// console.log(mathFunc(2, 3))
// console.log(mathFunc(-5, 7))

// !======================NaN=====

// const numbers = (num = 1) => num;
// console.log(numbers())

// const numbersTwo = (num) => num * num;
// console.log(numbersTwo())

// const numbersTwo = (num) => {
// 	console.log(num);
// 	return num * num;
// };

// console.log(numbersTwo());
