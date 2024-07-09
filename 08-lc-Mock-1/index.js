// ====First Task==========

// v1
// const getInterval = numbers => {
// 	return [Math.min(...numbers), Math.max(...numbers)]
// }

// // examples
// console.log(getInterval([1, 50, 0, 90, 5])); // [0, 90]
// console.log(getInterval([-10, -2, -5, -20, -3])); // [-20, -2]
// console.log(getInterval([100, 200, 300, 400, -500])); // [-500, 400]

// v2
// const getInterval = numbers => {
// 	return numbers.reduce((acc, num) => [
//     Math.min(acc[0], num),
//     Math.max(acc[1], num)
//   ], [Infinity, -Infinity]);
// }

// console.log(getInterval([1, 50, 0, 90, 5])); // [0, 90]
// console.log(getInterval([-10, -2, -5, -20, -3])); // [-20, -2]
// console.log(getInterval([100, 200, 300, 400, -500])); // [-500, 400]

// v3

// const getInterval = numbers => {
// 	return numbers.reduce((acc, num) => {
// 		let min = acc[0];
// 		let max = acc[1];

// 		if (num < min) min = num;
// 		if (num > max) max = num;

// 		return [min, max];
// 	}, [numbers[0], numbers[0]]);
// }

// console.log(getInterval([1, 50, 0, 90, 5])); // [0, 90]
// console.log(getInterval([-10, -2, -5, -20, -3])); // [-20, -2]
// console.log(getInterval([100, 200, 300, 400, -500])); // [-500, 400]


// TASK 3

// v1

// function intersection(firstArr, secondArr) {
//   // put your code here
// 	return firstArr.reduce((acc, num) => {
// 		if (secondArr.includes(num)) {
// 			acc.push(num)
// 		}
// 		return acc;
// 	}, [])
// }

// // examples
// console.log(intersection([1, 2, 3], [2, 3, 4, 5])); // returns ==> [2, 3]
// console.log(intersection([1, 2, 0], [2, 3, -1, 5])); // returns ==> [2]
// console.log(intersection([4, 8, -1], [1, 2])); // returns ==> []

	// v2

	// function intersection(firstArr, secondArr) {
	// 	// put your code here
	// 	return firstArr.filter(el => secondArr.includes(el))
	// }
	
	// // examples
	// console.log(intersection([1, 2, 3], [2, 3, 4, 5])); // returns ==> [2, 3]
	// console.log(intersection([1, 2, 0], [2, 3, -1, 5])); // returns ==> [2]
	// console.log(intersection([4, 8, -1], [1, 2])); // returns ==> []
	

// ===========Task 4 ===================

// input: name
// output: list book [{}]

// algo

// 1. iteration arr
// 2. if count > 0 output obj
// 3. output with obj title

// const booksStorage = [
// 	{
// 		author: 'Bill Gates',
// 		title: 'The Road Ahead',
// 		booksCount: 5,
// 		bookingsCount: 10,
// 	},
// 	{
// 		author: 'Bill Gates',
// 		title: 'Slow Horses',
// 		booksCount: 12,
// 		bookingsCount: 21,
// 	},
// 	{
// 		author: 'Steve Jobs',
// 		title: 'Walter Isaacson',
// 		booksCount: 0,
// 		bookingsCount: 5,
// 	},
// 	{
// 		author: 'Suzanne Collins',
// 		title: 'Mockingjay: The Final Book of The Hunger Games',
// 		booksCount: 2,
// 		bookingsCount: 7,
// 	},
// 	{
// 		author: 'Taras Shevchenko',
// 		title: 'Kobzar',
// 		booksCount: 0,
// 		bookingsCount: 10,
// 	},
// ]

// function getAvailableBooks(author) {
// 	return booksStorage
// 		.filter(book =>
// 			author
// 				? author === book.author && book.booksCount > 0
// 				: book.booksCount > 0
// 		)
// 		.map(prop => ({
// 			title: prop.title,
// 			author: prop.author,
// 		}))
// }

// // examples
// // #1
// getAvailableBooks()
// // ===> returns
// // [
// //   {
// //     author: 'Bill Gates',
// //     title: 'The Road Ahead',
// //   },
// //   {
// //     author: 'Bill Gates',
// //     title: 'Slow Horses',
// //   },
// //   {
// //     author: 'Suzanne Collins',
// //     title: 'Mockingjay: The Final Book of The Hunger Games',
// //   },
// // ];

// // #2
// getAvailableBooks('Taras Shevchenko')
// // ===> returns
// // [
// //   {
// //     author: 'Taras Shevchenko',
// //     title: 'Kobzar',
// //   },
// // ];


// ===================Task 5===========================

// function getTopStudent(studentsData) {
//   const topStudent = studentsData.reduce((acc, curr) =>
//     (acc.points > curr.points) ? acc : curr
//   );

//   return topStudent;
// }

//   // return topStudent;

// const students = [
//   { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 95 },
//   { id: 2, firstName: 'Petro', lastName: 'Petrov', points: 85 },
//   { id: 3, firstName: 'Anna', lastName: 'Annikova', points: 98 },
//   { id: 4, firstName: 'Svitlana', lastName: 'Svitlichna', points: 91 },
//   { id: 5, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
// ];

// console.log(getTopStudent(students));

// const students2 = [
//   { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 9 },
//   { id: 2, firstName: 'Petro', lastName: 'Petrov', points: -5 },
//   { id: 3, firstName: 'Mykola', lastName: 'Mykolenko', points: 88 },
// ];

// console.log(getTopStudent(students2));

// const students3 = [
//   { id: 1, firstName: 'Ivan', lastName: 'Ivanov', points: 0 },
//   { id: 2, firstName: 'Mykola', lastName: 'Mykolenko', points: -88 },
// ];

// console.log(getTopStudent(students3));
