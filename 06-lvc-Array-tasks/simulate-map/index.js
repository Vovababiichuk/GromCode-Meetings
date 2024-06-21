//! filter() - є масив і потрібно отримати урізаний масив.
//! map() - є масив одного вигляду потрібно отримати масив іншого вигляду (такої самої довжини).
//! reduce - коли потрібно отримати один цільний результат... Є масив чисел - отримати обьект. Є масив - отримати число. Reduce - переводиться зменшити звузити....
//! Також подивитися чи мап чи фільтер підходить, якщо ні - то скоріше редюс... крім простих варіантів де потрібно tru or false...

//! ===============================Simulate map()==================

// algo
// 0. create empty arr
// 1. iterate arr
// 2. apply callback for each element
// 3. if callback true -> push to new

// input: arr, callback
// output: arr

// callback:
// input: element, index, array
// output: element

const mapArrayElements = (arr, callback) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    res.push(callback(arr[i], i, arr));
  }
  return res;
};

// testing
const test = [1, 10, 5, 7];
console.log(mapArrayElements(test, el => el * 2)); // [2, 20, 10, 14]
console.log(mapArrayElements(test, (el, i) => el + i)); // [1, 11, 7, 10]
