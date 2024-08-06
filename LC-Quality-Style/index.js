/*
DO NOT use:
1. naming of files/funcs/variables is important
2. magical numbers or strings

3. nesting of the code, more than 2
4. too much if/else statements
5. expressions/calculations inside if statement (conditions inside if must be as short and easy to understand as possible)
6. expressions in return (for example, assignment)
7. duplicates of the code
8. variable that is used only once
9. for/while and other loops, use CORRECT arrays methods

10. redundant iteration through arrays or objects, or redundant methods calls - speed
11. take attention to the memory usage, don't create new array if it is not needed
12. divide your code into logical blocks
13. BIG code blocks (inside {} - if, loop or array methods)

14. every line of code should be easy to read
15. every piece of code must be tested
*/

//! Solid, DRY, KISS

//! Code QUALITY - ОРГАНІЗАЦІЯ!!! це про організацію коду, читабельність, чистота кода... покращують організацію коду і всім легше працювати з ним.

//! CODE STYLE - CИНТПКСИС!!! Берена себе ESLINT.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*
Development steps:
Functionality (testing)
Code quality
*/

//! EVENT

//! Як працює інтернет сторінка?

//! Процес рендеру - це процес модифікації ДОМУ.
//! Спочатку готовляться дані!!!... а потім уже РЕРЕНДЕР відбувається з актуальними даними...

//! Окремо працюємо з СТОРИДЖОМ окремо працюємо з РЕНДЕРОМ

//! На кожен апдейт новий запит...!!! Отримали актуальні дані потім відрендерили!!!

//! РЕАКТ - спрощує розробку!!!

//! ==========
//! ==========
//! ==========
/*
Web basic flow:
Storage (API/DB, localStorage, file, JS array)
Render data from storage (append into DOM)
(!) User update -> update date from/in storage
Re-render (the same as step 2, but with diff data)
*/

//! use single responsibility

//! ====================================1 - Refactoring====================================
//! Валідація Спочатку
//! Створюємо змінну якщо вона десь буде перевикористовуватися
//! Блоки коду короткі повинні бути
//! В Ф-ї до 30 стрічок коду!!!

/*
export const createTask = () => {
  const taskInput = document.querySelector('.task-input');
  const text = taskInput.text;
  if (text.trim() === '') {
    return; // Don't add empty tasks
  }

  tasks.push({
    id: tasks.length + 1,
    text,
    done: false,
  });
  renderTasks(tasks);
  taskInput.value = '';
};

document.querySelector('.create-task-btn').addEventListener('click', createTask);
*/

/*
export const toggleTaskStatus = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const task = tasks.find(task => task.id === event.target.dataset.id);
  task.done = !task.done;

  renderTasks(tasks);
};

document.querySelector('.list').addEventListener('click', toggleTaskStatus);
*/