//! Обьєкти - структура яка допомагає працювати з структурую даних у форматі ключ-значення

//! вміти додавати властивості, витягувати, зчитувати... мапити.. фільтрувати..

// v1

// input: obj, string, value (any)
// output: obj

// function addPropertyV1(obj, key, value) {
//   const newObj = { ...obj };
//   newObj[key] = value;
//   return newObj;
// }

// function addPropertyV1(obj, key, value) {
//   obj[key] = value;
//   return obj;
// }

// examples
// const transaction = {
//   value: 170,
// };

// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// v2

//! about assign
// input: init obj, obj1 ...obj
// output: obj

// function addPropertyV2(obj, key, value) {
//   return Object.assign(obj, { [key]: value });
// }

// key: - без скобок - не використовується динамічний ключ.
//! [key] - computed properties

// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// v3

// function addPropertyV3(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }

// console.log(addPropertyV3(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// v4 - spread

// function addPropertyV4(obj, key, value) {
//   return { ...obj, [key]: value };
// }

// console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// v5 - extra
//! rest - бере і розбиває
//! rest - він юзається з ф-ями
// function addPropertyV1(obj, ...args) {
//   console.log('args: ', args);

//   const res = args.reduce((acc, el, index) => {
//     if (index % 2 === 1) {
//       return acc;
//     }
//     return { ...acc, [el]: args[index + 1] };
//   }, {});

//   return { ...obj, ...res };
// }

// examples
// const user = {
//   id: 1001,
//   height: 170,
// };

// console.log(addPropertyV1(user, 'Bob', 'email'));

//! ===================SPREAD=================================

// //! spread - збирає в масив
// //! spread - юзається з масивами ...
// const arr = [1, 2, 3];
// const arr2 = [5, 6, 7];
// const arr3 = [...arr, ...arr2];
// console.log(arr3);

// const obj = {
//   name: 'Tom',
//   age: 17,
// };

// const objCopy = { ...obj, age: 18, email: 'gmail@test.com' };
// console.log(objCopy);

//! =================DESTRUCTURING=========================

//! destructuring - дозволяє дістати елемент масива чи обьекта у зручний спосіб

// obj
// const obj = {
//   name: 'Tom',
//   age: 17,
//   role: 'developer',
// };

// const { name, age } = obj;
// console.log(name);

// const { name, ...objPart } = obj;
// console.log(name, objPart);
// objPart - зібрав все решта в обьект

// arr2
// const arr = [1, 3, 5, 6];
// const [firstEl, ...arrRest] = arr;
// console.log(firstEl);
