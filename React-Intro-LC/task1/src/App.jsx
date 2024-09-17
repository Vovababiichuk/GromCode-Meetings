import React from 'react';
import Auth from './Auth';

const App = ({ price }) => {
console.log(typeof price);
  return (
    <Auth />
  )
};

export default App;

// REACT APPROACH
// 1. Divide the UI into components
// header, footer, main, (text, table (row)), navigation
// 2. Build static version in React
// Робим повністю верстку потім до логіки!!!
//3. Подумати як компоненти будуть взаємодіяти... подумати про стейт - де він буде жити і який .... в якій компоненті буде і що буде зберішатися в стейті....
// Стейт - динамічні дані які можуть змінюватися при взаємодії з юзером і сторінка буде перемальовуватися...
// Стейт підвязаний на дії юзера... юзер клацнув і перемалювалося...
//Write logis in JS/TS

// Починати легше з пропсів...