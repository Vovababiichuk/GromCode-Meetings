import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from './userTable.jsx';
import { users } from './users.js';
import './index.scss';

const rootElement = document.querySelector('#root');

ReactDOM.render(<UserTable users={users} />, rootElement);
