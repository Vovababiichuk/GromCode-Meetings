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

//! ============Arrays Methods (Lesson-7)======================

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

//! =============================Object Basics Less-8=====================

// TODO -- Reduce()

// const transformToObject = arr => {
//   return arr.reduce((acc, curr) => {
// 		acc[curr] = curr;
// 		return acc;
// 	}, {})
// };

// console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }

// TODO -- Object.Values

// const concatProps = obj => {
//   return Object.keys(obj);
// };

// console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' })); // ==> ['John Doe', 17, 'football']

// TODO -- Read Properties

// const transaction = {
//   currency: 'USD',
//   value: 170,
//   operation: 'sale',
//   agent: {
//     country: 'Ukraine',
//     company: 'NYSE',
//   },
//   'operation time': 1584029990001,
// };

// /* 1. Выведи в консоль значение свойства 'currency' с помощью точки */
//! console.log(transaction.currency);

// /* 2. Выведи в консоль значение свойства 'value' с помощью квадратных скобок */
//! console.log(transaction['value']);

// /* 3. Выведи в консоль значение свойства обьекта transaction, название которого находится в переменной key - используй квадратные скобки */
// const key = 'operation';
//! console.log(transaction[key]);

// /* 4. Введи в консоль значение свойства 'company' используя квадратные скобки */
//! console.log(transaction.agent['company']);

// /* 5. Выведи в консоль значение свойства 'country' используя точку */
//! console.log(transaction.agent.country);

// /* 6. Выведи в консоль значение свойства 'operation time' используя квадратные скобки */
//! console.log(transaction['operation time']);

// TODO -- Assigning Properties

// const user = {
//   name: 'Tom',
//   age: 17,
// };

// /* присвой объекту свойство hobby со значением 'football' с помощью точки */
//! user.hobby = 'footbal';

// /* название свойства хранится в переменной anotherKey. Присвой объекту такое свойство со значением false */
// const anotherKey = 'married';
//! user[anotherKey] = false;

// /* присвой объекту свойство 'favorite music' со значением 'rock' */
//! user['favorite music'] = 'rock';

// /* присвой объекту свойство 'address', которое будет пустым объкетом */
//! user.address = {};

// /* присвой объекту в 'address' свойство 'country', со значением 'Ukraine' */

// !user.address.country = 'Ukraine';

// /* присвой объекту в 'address' свойство 'building', со значением 17 */
//! user.address.building = 17;

// /* выведи в консоль итоговый объект user */
// console.log(user);

// TODO -- Iteration Keys
// function getKeys(obj) {
//   return Object.keys(obj);
// }

// console.log(getKeys({ name: 'John Doe', age: 17, interest: 'football' }));

// TODO -- Retrieving Properties

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const pickProps = (obj, props) => {
// 	return Object.keys(obj).reduce((acc, key) => {
// 		if (props.includes(key)) {
// 			acc[key] = obj[key] //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 		}
// 		return acc
// 	}, {})
// }

// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])) // ==> { a: 1, c: 3 }
// console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])) // ==> { a: 1, c: 3 }

// TODO -- Filter Object
// TODO -- Filter Object
// TODO -- Filter Object

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const getAdults = obj => {
// 	const newObj = {}
// 	for (let key in obj) {
// 		if (obj[key] >= 18) {
// 			newObj[key] = obj[key] //!!!!!!!!!!!!!!!!!!!!!!!1
// 		}
// 	}
// 	return newObj;
// }

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })) // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })) // ==> { Ann: 56 }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const getAdults = obj => {
// 	return Object.keys(obj).reduce((acc, key) => {
// 		console.log(key)
// 		console.log(obj[key])
// 		if (obj[key] >= 18) {
// 			acc[key] = obj[key] //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 		}
// 		return acc;
// 	}, {})
// }

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })) // ==> { 'John Doe': 19, Bob: 18 }
// console.log(getAdults({ Ann: 56, Andrey: 7 })) // ==> { Ann: 56 }

//! ===========================Object(keys, value, entries)================

// TODO -- Entries/Reduce()

// const getAdults = obj => {
// 	return Object.entries(obj).reduce((acc, [key, value]) => {
// 		if (value >= 18) {
// 			acc.push(key)
// 		}
// 		return acc;
// 	}, [])
// }

// console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }))

// TODO -- copyObject

// const copyObj = obj => {
// 	// return Object.assign({}, obj, {test: 'yyy'})
// 	return {...obj}
// }

// console.log(copyObj({ 'John Doe': 19, Tom: 17, Bob: 18 }))

// TODO -- Iterate object keys

// function getKeys(obj) {
// 	return Object.keys(obj).forEach((key => console.log(key)))
// }

// console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }))
// // prints ===>
// // name
// // city
// // englishLevel

// TODO -- Add Properties

// function addPropertyV4(userData, userId) {
// 	return {...userData, id: userId}
// }

// const user = {
// 	name: 'Sam',
// }

// console.log(addPropertyV4(user, '1234567')) // ==> { name: 'Sam', id: '1234567' }

// TODO -- Merge objects

// function mergeObjectsV1(obj1, obj2) {
//   return {...obj1, ...obj2};
// }

// const obj1 = {
//   name: 'Tom',
//   age: 17,
// };

// const obj2 = {
//   name: 'Bob',
//   student: false,
// };

// console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }

// TODO -- Object to Array

// const rooms = {
// 	room1: [{ name: 'Jack' }, { name: 'Ann' }, { name: 'Tom' }, { name: 'John' }],
// 	room2: [{ name: 'Pol' }, { name: 'Julia' }, { name: 'Bob' }],
// 	room3: [{ name: 'Denis' }, { name: 'Laurie' }],
// 	room4: [{ name: 'Matt' }],
// }

// const getPeople = obj => {
// return Object.values(obj).flat().map(room => room.name)
// }

// console.log(getPeople(rooms))

// TODO -- Count/Reduce()

// const getTotalRevenue = transactions => {
// 	return transactions.reduce((acc, curr) => acc + curr.amount, 0)
// }

// const dayTransactions = [
// 	{ userId: 22, amount: 60, operation: 'sell' },
// 	{ userId: 22, amount: 160, operation: 'buy' },
// 	{ userId: 44, amount: 90, operation: 'sell' },
// ]

// console.log(getTotalRevenue(dayTransactions)) // ==> 310

// TODO -- Add Computed Property

// function addPropertyV1(obj, key, value) {
// 	return { ...obj, [key]: value }
// }

// const transaction = {
// 	value: 170,
// }

// console.log(addPropertyV1(transaction, 'currency', 'USD')) // ==> { value: 170, currency: 'USD' }

// TODO -- Build Object

// function buildObject(keysList, valuesList) {
// 	return keysList.reduce((acc, key, index) => {
// 		acc[key] = valuesList[index];
// 		return acc;
// 	}, {})
// }
// // examples
// const keys = ['name', 'address', 'age']
// const values = ['Vasyl', 'Ukraine', 34]
// const result = buildObject(keys, values) // ==> { name: 'Vasyl', address: 'Ukraine', age: 34 }
// console.log(result);

// TODO -- Compare two objects //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function compareObjects(firstObj, secondObj) {
// 	const keysFirstObj = Object.keys(firstObj)
// 	const keysSecondObj = Object.keys(secondObj)

// 	if (keysFirstObj.length !== keysSecondObj.length) {
// 		return false
// 	}

// 	return keysFirstObj.every(
// 		key => keysSecondObj.includes(key) && firstObj[key] === secondObj[key] //!!!!!!!!!!!!!!
// 	)
// }

// const obj1 = {
// 	name: 'Tom',
// 	age: 17,
// }

// const obj2 = {
// 	name: 'Bob',
// 	age: 17,
// }

// const obj3 = {
// 	name: 'Bob',
// 	age: 17,
// 	student: false,
// }

// const obj4 = {
// 	name: 'Tom',
// 	age: 17,
// }

// const obj5 = {
// 	age: 17,
// 	name: 'Tom',
// }

// console.log(compareObjects(obj1, obj2)) // ==> false
// console.log(compareObjects(obj2, obj3)) // ==> false
// console.log(compareObjects(obj1, obj4)) // ==> true
// console.log(compareObjects(obj4, obj5)) // ==> true

// TODO -- Object in Array/Destruction //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const getCustomersList = obj => {
// 	return Object.entries(obj).map(([id, value]) => ({...value, id})).sort((a, b) => a.age - b.age)
// }

// const customers = {
// 	'customer-id-1': {
// 		name: 'William',
// 		age: 54,
// 	},
// 	'customer-id-2': {
// 		name: 'Tom',
// 		age: 17,
// 	},
// 	'customer-id-3': {
// 		name: 'Bob',
// 		age: 45,
// 	},
// }

// console.log(getCustomersList(customers))

//! =======================STRING==============================

// TODO -- Calculator

// v1

// const calc = str => {
// 	const arr = str.split(' ')
// 	const [a, operator, b] = arr
// 	const num1 = Number(a)
// 	const num2 = Number(b)

// 	let res
// 	switch (operator) {
// 		case '+':
// 			res = num1 + num2
// 			break
// 		case '-':
// 			res = num1 - num2
// 			break
// 		case '*':
// 			res = num1 * num2
// 			break
// 		case '/':
// 			res = num1 / num2
// 			break
// 		default:
// 			return 'Error'
// 	}
// 	return `${str} = ${res}`
// }

// console.log(calc('1 + 2'))

// v2

// const calc = str => {
// 	const arr = str.split(' ')
// 	const [a, operator, b] = arr
// 	const num1 = Number(a)
// 	const num2 = Number(b)

// const operations = {
// 	'+': (x, y) => x + y,
// 	'-': (x, y) => x - y,
// 	'*': (x, y) => x * y,
// 	'/': (x, y) => x / y,
// }

// const res = operations[operator] ? operations[operator](num1, num2) : 'Error'
// return `${str} = ${res}`
// }

// console.log(calc('1 + 2'))

// TODO -- Reverse String

// const reverseStr = (str) => {
// 	return str.split('').reverse().join('')
// }

// console.log(reverseStr('Hello!'));

// TODO -- Clean Data

// const cleanTransactionsList = (arr) => {
//   return arr.map(el => +el).filter(el => !isNaN(el)).map(el => `$${el.toFixed(2)}`)
// }

// console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
