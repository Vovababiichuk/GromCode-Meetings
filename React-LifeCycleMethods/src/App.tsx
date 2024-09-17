import { Routes, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';

const App = () => (
  <div className="page">
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/">Home</Link>
      </li>
      <li className="navigation__item">
        <Link to="/users">Users</Link>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/*" element={<Users />} />
    </Routes>
  </div>
);

export default App;



// Отримали JSX
// Потім RENDER відбувається - JSX апендиться в DOM
// Якщо глибше то є віртуальний DOM - КОПІЯ того дома яка є в браузері... запускається рендер... вносяться зміни в віртуальний дом але в браузері ще не відмалювався... Реакт знаходить ті сторінки які змінилися і вносить зміни... порівнює

// Reconciliaction

// Методи життэвого циклу - все що відбувається з компонентом від народження до смерті....
// В Реакта є етапи і методи життєвого цикла...

// Mounting
// Момент народження компонента... коли компонента додається до нашої сторінки
// Перший рендер - пустий - другий коли піде запит на сервер і два рендера буде....

//Updating
// DidMount - один раз а DID Update кожен раз коли буде перерендер
// componentDidUpdate - після рендеру... спрацює

// Коли пропси змінилися або стейт або батьківський компонент.. або fors

// shouldComponentUpdate - допоміжний....

//! РОУТІНГ

// Квері параметр - ?price=100

// SPA - при зміні url ми не йдемо на сервер
// SPA - при зміні url 