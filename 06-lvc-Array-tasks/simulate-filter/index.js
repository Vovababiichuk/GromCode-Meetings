//! filter() - є масив і потрібно отримати урізаний масив.
//! map() - є масив одного вигляду потрібно отримати масив іншого вигляду (такої самої довжини).
//! reduce - коли потрібно отримати один цільний результат... Є масив чисел - отримати обьект. Є масив - отримати число. Reduce - переводиться зменшити звузити....
//! Також подивитися чи мап чи фільтер підходить, якщо ні - то скоріше редюс... крім простих варіантів де потрібно tru or false...

//! ===============================Simulate filter()==================

// algo
// 0. create empty arr
// 1. iterate arr
// 2. apply callback for each element
// 3. if callback true -> push to new

// input: arr, callback
// output: arr

// callback:
// input: element, index, array
// output: bool

const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }

  return res;
};

// testing
const test = [1, 10, 5, 7];
console.log(filterArrayElements(test, el => el > 5));
console.log(filterArrayElements(test, (el, i) => i > 1 && el > 5));
