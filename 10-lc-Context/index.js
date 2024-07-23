//! Контекст - це обькт в рамках якого виконуэться ф-я.
//! Ф-я може виконуватися сама по собы без контексту - буде - undefined.
//!

// В залежності від контексту ф-я буде виводити різне повідомлення
// розширює можливості ф-ї

// function logIn() {
//   console.log(`User with ID ${this.id} is logged in`);
// }

// function logOut() {
//   console.log(`User with ID ${this.id} is logged out`);
// }

// logIn();

// const context = { id: 42 };
// const loginBinded = logIn.bind(context);

// loginBinded();

// Чому не викликати через параметри? НЕмає додаткових можливостей!
// logOut and logIn  - мають один контекст що зручно...
// this - спосіб передачі даних у ф-ю... дані з контексту можуть використовуватися декількома ф-ями одночасно - що зручно
// this - це обьект який володіє виконанням ф-ї...

// this - це звичайний обьект який закріплений за ф-єю... він може бути або не бути
/// надає доступ до даних....
// class User {
//   constructor(id) {
//     this.id = id;
//     this.isLoggedIn = false;
//   }
//   logIn() {
//     console.log(`User with ID ${this.id} is logged in`);

//     this.isLoggedIn = true;
//   }

//   logOut() {
//     console.log(`User with ID ${this.id} is logged out`);

//     this.isLoggedIn = false;
//   }
// }

// const user = new User(42);
// console.log(user.isLoggedIn);

// user.logIn();
// console.log(user.isLoggedIn);

// якщоб контексту не було... то в нашій ф-ї потрібно було б передавати ці методи напряму ..... але було б МУТУВАННЯ ДАНИ....

// ТОМУ ДАНИЙ механізм РОЗШИРЮЄ МОЖЛИВОСТІ Ф-Ї

//! КОНТЕКСТ - ОБЬЕКТ який закріплений за ф-єю... який розширює можливості ф-ї...

//! bind, applay, call - вирішують проблему - ВТРАТИ КОНТЕКСТУ!!!!
//! bind, applay, call - вирішують проблему - ВТРАТИ КОНТЕКСТУ!!!!
//! bind, applay, call - вирішують проблему - ВТРАТИ КОНТЕКСТУ!!!!
//! Найчастіший випадок ВТРАТИ КОНТЕКСТУ - це CAllback!!!
//! Найчастіший випадок ВТРАТИ КОНТЕКСТУ - це CAllback!!!
//! Найчастіший випадок ВТРАТИ КОНТЕКСТУ - це CAllback!!!

//! lose context 1
//! lose context 1
//! lose context 1
// const testUser = {
//   id: 100,
// 	isLoggedIn: false,

//   logIn() {
//     console.log(`User with ID ${this.id} is logged in`);

//     this.isLoggedIn = true;
//   },
// };

// console.log(testUser.isLoggedIn);
// testUser.logIn();
// const logInFun = testUser.logIn;
// logInFun();
// console.log(testUser.isLoggedIn);

//! lose context 2 - самий частий кейс втрати контексту це CALLBACK
//! lose context 2 - самий частий кейс втрати контексту це CALLBACK
//! lose context 2 - самий частий кейс втрати контексту це CALLBACK

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,

  startTimer() {
    // input: callback, number
    // output: number (timer ID) щоб видалити чи зупинити щоб управляти таймером

    // callback
    // input: none
    // output: none
    // колбек має не щось повернути а виконати логіку

    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.secondsPassed += 1;

        if (this.secondsPassed === 60) {
          this.minsPassed += 1;
          this.secondsPassed = 0;
        }

        console.log(`${this.minsPassed}:${this.secondsPassed}`);
      }, 1000);
    }

    // контекст втрата
    // чому втрата відбувається?
    // setInterval - викликається через глобальний обьект window і в середині setInterval наш колбек викликався через window... контекст вртатився... ще з початку контексту не було...

    // const callback = function () {
    //   console.log('this Value', this);

    //   this.secondsPassed += 1;

    //   if (this.secondsPassed === 5) {
    //     this.minsPassed += 1;
    //     this.secondsPassed = 0;
    //   }

    //   console.log(`${this.minsPassed}:${this.secondsPassed}`);
    // };

    // const callbackBinded = callback.bind(this);

    // setInterval(callbackBinded, 1000);

    // Стрілочна ф-я свого контексту не має і бере інший контекст тоя який потрібно нам тут... Стрілочні ф-ї були задизайнені для колбеків
    // Стрілочна ф-я свого контексту не має і бере інший контекст тоя який потрібно нам тут... Стрілочні ф-ї були задизайнені для колбеків

    // setInterval(() => {
    //   this.secondsPassed += 1;

    //   if (this.secondsPassed === 5) {
    //     this.minsPassed += 1;
    //     this.secondsPassed = 0;
    //   }

    //   console.log(`${this.minsPassed}:${this.secondsPassed}`);
    // }, 1000);
  },

  getTime() {
    return `${this.minsPassed}:${this.secondsPassed < 10 ? '0' : ''}${this.secondsPassed}`;
  },

  stopTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      console.log('Таймер зупинено');
      this.intervalId = null;
    }
  },

  resetTimer() {
    this.stopTimer();
    this.secondsPassed = 0;
    this.minsPassed = 0;
    console.log('Таймер скинуто');
  },
};

// // Запуск таймера
// timer.startTimer();

// // Зупинка таймера через 5 секунд
// setTimeout(() => {
//   timer.stopTimer();
// }, 5000);

// // Скидання таймера через 10 секунд
// setTimeout(() => {
//   timer.resetTimer();
// }, 10000);

// // Перезапуск таймера через 15 секунд
// setTimeout(() => {
//   timer.startTimer();
// }, 15000);

// Запуск таймера
// timer.startTimer();

// setTimeout(() => {
// 	timer.stopTimer();
// }, 5000);

//! Ще втрачаэться контекст в класах....

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 5 waves learning

// # 50-60% (theory & practice)
// another lessons (+10%)
// projects (+10%)
// mock interviews (+10%)
// internship (+10%)
