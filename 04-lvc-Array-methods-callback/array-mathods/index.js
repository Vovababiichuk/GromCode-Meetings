// plan
// 1. arrays methods overview
// 2. callback
// 3. filter in details

//! =======мутирующие методы массивов (изменяют исходный массив)=============
//! =======мутирующие методы массивов (изменяют исходный массив)=============

// ==================pop()===================

/* pop - удалит из массива последний элемент и вернет его */

// c помощью метода pop достань последний элемент массива numbersList1 и помести его в переменную lastNumber
// выведи в консоль эту переменную, а так же массив numbersList1 после выполнения pop

// const numbersList1 = [1, 2, 3, 4, 5];
// console.log('Array before pop: ' + numbersList1);

// //! input: none
// //! output: element | undefined

// const res = numbersList1.pop(); //! pop input nothing
// console.log('res: ' + res); //! 5 output - element
// console.log('Array after pop: ' + numbersList1); // Array after pop: 1,2,3,4

// ==================push()===================

/* push - добавит элемент в конец массива */

// c помощью метода push добавь число 6 в конец массива numbersList2
// выведи в консоль результат работы метода push, а так же массив numbersList2 после выполнения push

// //! input: element1 (any type) ... elementN
// //! output: arr length (number)

// const numbersList2 = [1, 2, 3, 4, 5];
// console.log('Array before push: ' + numbersList2);

// const res = numbersList2.push(120, 'Hello'); //! input elements
// console.log('res: ' + res); //! 6 output length
// console.log('Array after push: ' + numbersList2); //

// ==================shift()===================

/* shift - удалит из массива первый элемент и вернет его */

// c помощью метода shift достань первый элемент массива numbersList3 и помести его в переменную firstNumber
// выведи в консоль эту переменную, а так же массив numbersList2 после выполнения shift

// //! input: none
// //! output: element | undefined

// const numbersList3 = [1, 2, 3, 4, 5];
// console.log('Array before shift: ' + numbersList3);

// const res = numbersList3.shift(); //! input none
// console.log('res: ' + res); //! 1 element | undefined
// console.log('Array after shift: ' + numbersList3);

// ==================unshift()===================

/* unshift - добавит элемент в начало массива */

// c помощью метода unshift добавь число 0 в начало массива
// выведи в консоль результат работы метода unshift, а так же массив numbersList4 после выполнения unshift

// //! input: element1, …, elementN
// //! output: length

// const numbersList4 = [1, 2, 3, 4, 5];
// console.log('Array before unshift: ' + numbersList4);

// const res = numbersList4.unshift(10, 'test');
// console.log(`res: ${res}`); // 7 output length
// console.log(`Array after unshift: ${numbersList4}`); // 10,test,1,2,3,4,5
// console.log(numbersList4);

//! =======НЕ мутирующие методы массивов (НЕ изменяют исходный массив)=============
//! =======НЕ мутирующие методы массивов (НЕ изменяют исходный массив)=============

// начальный массив
// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];

/* метод filter */
/* const newArr = arr.filter(callback) - создает и возвращает новый отфильтрованный массив.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   в newArr попадут только те элементы arr, для которых callback(arr[i]) вернет true
   callback(arr[i]) === true -> элемент будет добавлен в финальный массив
   callback(arr[i]) === false -> элемент НЕ будет добавлен в финальный массив */

// c помощью метода filter создай новый массив bigNumbers, в котором будут числа > 5 из anotherNumbersList
// выведи bigNumbers в консоль

// put your code here

// c помощью метода filter создай новый массив evenPositions, в котором будут числа из четных позиций которые > 5
// массива anotherNumbersList
// выведи evenPositions в консоль

// const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// console.log('Array before filter', anotherNumbersList);

// =============option 1=======================

//! КОЛИ callback є то він також має input/output

//! input: element
//! output:  boolean

// function filterCallback(el) {
//   if (el > 5) {
//     return true;
//   }
//   return false;
// }

// //! input: callbackFn, (this) - другий параметр контекст this але не викор. зараз
// //! output: array

// const res4 = anotherNumbersList.filter(filterCallback);

// console.log(res4);
// console.log('Array after filter', anotherNumbersList);

// =============option 2=======================

// const res4 = anotherNumbersList.filter(function (el) {
//   return el > 5;
// });

// console.log(res4);

// =============option 3=======================

// const res4 = anotherNumbersList.filter(el => el > 5);
// console.log(res4);
