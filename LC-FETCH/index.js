//! ===================async code================
//! ===================async code================
//! ===================async code================

/*
Асинхронний код в JavaScript дозволяє виконувати операції, які займають певний час (наприклад, запити до серверу, читання файлів, таймери тощо) без блокування виконання іншого коду. Це дозволяє вашому додатку залишатися відповідним і швидко реагувати на взаємодію з користувачем, навіть коли виконуються тривалі операції.
*/

// Приклади асинхронного коду - Fetch, setTimeout... запит на сервер... загрузка сторінки... все це відбувається асинхронно

// 1. setTimeout/setInterval
// 2. fetch/http
// 3. event handlers
// 4. image/scripts loading

// JS - однопоточний.
// Js - можна зробити насильно многопоточним (multi-threading)

// console.log("Start");

// setTimeout(() => {
// 	console.log("Timeout");
// }, 1000);

// console.log('End');

// EVENT LOOP!!!!!!!!!!!!!!!!!!
// EVENT LOOP!!!!!!!!!!!!!!!!!!
// EVENT LOOP!!!!!!!!!!!!!!!!!!

//! ===================promises/fetch================
//! ===================promises/fetch================
//! ===================promises/fetch================

// Проміс - це звичайний клас (new Promis) в середині якого реалізований ф-нал
// Обєкт класу проміс який має методи... then, catch, finally
// Проміст використовуються для запитів на сервери або считування даних...

const form = document.querySelector('.login-form');

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';
// algo
// 1. get form data
// 2. make http request (POST, res, error)
function createUserHandler(e) {
  e.preventDefault();

  const formData = {
    email: 'example@ex.com',
    firstName: 'Vova',
    password: '12345',
  };

  console.log('FORM DATA', JSON.stringify(formData));

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // input: url(string), options (obgect)
  // output: Promise

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Content-Type - вказуєм серверу який тип даних ми шлемо. Сервер може провалідувати запит.. якщо хедер не приходить то може видати 404 Not Found
    },

		//! BODY - це строка я кій лежить json
		//! BODY - це строка я кій лежить json
		//! BODY - це строка я кій лежить json
		// json - формат для передачі даних.
		// в body передається json... але в js немає такого типу даних то потрібно обгорнути в СТРОКУ "".
		// в body передаємо строка а в строкі уже лежить json формат
		// JSON.stringify(formData)
    body: JSON.stringify(formData)
  })
	// input: callvack - 2 колбека приймає... (resolve, reject)
	// output: Promis
	.then((response) => {
// algo
// 1. error handlers
// 2. success handlers
// 3. pars it to obj

//! тут формат поки body: ReadableStream
// тому потрібно json()
// respons повертає РОЛМІС (потрібкен час щоб обробити байти інфи )

if (!response.ok) {
	throw new Error('Network response was not ok');
}

		// console.log('response', response.json());
		return response.json();
		// return response.text();
		//
	})
	.then((data) => {
		console.log('data', data);
		// input: string
		alert(JSON.stringify(data));
	})
	.then((err) => {
		// err - обьект класу Error
		alert(err.message);
	})
}

form.addEventListener('submit', createUserHandler);

//! ===================error handling================
//! ===================error handling================
//! ===================error handling================

// Є помилки 2 видів - по статус коду і глобальні які попадають в catch
// catch - метод який викликається якщо проміс reject
// КОЛИ в catch попаде код? 
// В catch попадають помилки networkin... наприклад коли інтернет обірвався.... в іншому випадку ми самлстійно обробити маєм