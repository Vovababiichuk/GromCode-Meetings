import { User } from './user.js';
import { Student } from './student.js';

// const user1 = new User(1, 'John', 'Doe');
// console.log(user1);
// console.log(user1.isAdmin);
// user1.setIsAdmin = true;
// user1.setIsAdmin = 100;

// console.log(user1.getFullName());
// console.log(user1);

// Прототипи - дозволяє наслідуватися
// Прототипи - дозволяє наслідуватися
// Прототип - це ще один обьект.

// Прототип - оптимізація памяті, створюється один раз.....
// Прототип - оптимізація памяті, створюється один раз.....

// Цепочка прототипів - це обьект де зберігаються всі методи ... геттери сеттери... і ЛІНКА на слідуючий прототип
// Цепочка прототипів - це обьект де зберігаються всі методи ... геттери сеттери... і ЛІНКА на слідуючий прототип
// Цепочка прототипів - це обьект де зберігаються всі методи ... геттери сеттери... і ЛІНКА на слідуючий прототип

// Інтерпретатор як працює - іде в прототип шукає... і йде нижче по цепочці....
// Інтерпретатор як працює - іде в прототип шукає... і йде нижче по цепочці....

// const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
// console.log(student1);

function getTopStudent(students) {
  const { id, firstName, lastName } = students
    .filter(student => student.getIsActive)
    .reduce((topStudent, currStudent) => {
      if (currStudent.points > topStudent.points) {
        return currStudent;
      }
      return topStudent;
    }, students[0]);

		// це короткий запис коли KEY === VALUE (назва)
		// id: id, firstName: firstName, lastName: lastName
		return { id, firstName, lastName };
}

// examples

const user1 = new User(1, 'John', 'Doe');
const user2 = new User(2, 'Jane', 'Doe');
const user3 = new User(3, 'Jim', 'Beam');

console.log(user1.getFullName()); // ===> John Doe
console.log(user2.getFullName()); // ===> Jane Doe
console.log(user3.getFullName()); // ===> Jim Beam


const student1 = new Student(1, 'Alice', 'Johnson', 'Math', 85);
const student2 = new Student(2, 'Bob', 'Smith', 'Physics', 92);
const student3 = new Student(3, 'Carol', 'Williams', 'Chemistry', 78);

// student2.getIsActive = false;

const students = [student1, student2, student3];
console.log(getTopStudent(students));

student1.points = 95;
console.log(getTopStudent(students));

student1.setIsActive = false;
console.log(getTopStudent(students));




// !Клас даэ можливість контролювати поля - isActive, ніхто не змінить, ми можем зчитати і змінити через сеттер... якщо заберем сеттер то ніхто не змінить

//! Інкапсуляція - можна понаписувати різні методи і зручний доступ мати;



// ! ============================
// Обьект класу ПРОМІС
// Обьект класу ARRAY

//! OOП - протилежний, в центрі всього є клас і обьект класу
//! functional progtraming - в центрі всього стоїть ф-я

// const arr = [1, 2];
// console.log(arr);
