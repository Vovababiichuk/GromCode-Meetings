// ============================CALLBACK===========================

//! Функція яка передається в іншу функцію і яка може бути викликана пізніше!!!
//! Функція яка передається в іншу функцію і яка може бути викликана пізніше!!!

//! КОЛБЕК - розширює можливості ф-ї!!!
//! КОЛБЕК - розширює можливості ф-ї!!!

/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

// algo
// 1. iterate from to & calculate sum
// 2. call callback

//! input: number, number, callback
//! output: undefined

function sum(from, to, resolver) {
  let res = 0;
  for (let i = from; i <= to; i += 1) {
    res += i;
  }
  resolver(res);
}

//! input: number
//! output: undefined (тому що виводить в консоль)

function printResult(res) {
  console.log(`Result is: ${res}`);
}

// function sentEmail(res) {
// emailService.send(res)
// }

// function save(res) {
// service.save(res)
// }

// testing

sum(1, 5, printResult);
sum(4, 10, printResult);
sum(-4, undefined, printResult);
sum(0, 4, printResult);
