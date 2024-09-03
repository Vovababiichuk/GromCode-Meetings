//! Class Component
//! Class Component

// import React from 'react';
// import Login from './Login';
// import Logout from './Logout';
// import Spinner from './Spinner';
// import { Component } from 'react/cjs/react.production.min';

// REACT APPROACH (!!!)
// 1. Divide the UI into components +++
// header, footer, main (text, table (row), navigation)
// 2. Build static version in React +++
// 3. Think about props, state (where, which) +++
// 4. Write logic in JS/TS (80% JS, 20% JS)

// class Auth extends Component {
// state
// isStatusSpinner: false
// isLoggedIn: false
//   constructor(props) {
//     super(props);

//     this.state = {
//       isStatusSpinner: false,
//       isLoggedIn: false,
//     };
//   }

// algo
// 1. login click - isStatusSpinner: true
// 1.1 after 2 seconds - isStatusSpinner: false; isLoggingIn: true;
// 2. Logout click - isLoggingIn: false; isStatusSpinner: true;

//   handleLogin = () => {
//     console.log('handleLogin');
//! не перезаписується ... він мержиться... старий стейт і новий мержиться...
//     this.setState({
//       isStatusSpinner: true,
//     });

//     console.log(this.state);

//     setTimeout(() => {
//       this.setState({
//         isStatusSpinner: false,
//         isLoggedIn: true,
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     console.log('handleLogout');
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

// algo - render
// 1. if isStatusSpinner: true - show Spinner
// 2. if isLoggedIn: true - show Logout

//   render() {
//     console.log('RENDER');
//     console.log('state updated', this.state);
//     console.log(this.state);
//     const { isStatusSpinner, isLoggedIn } = this.state;

//     return (
//       <div>
//         {isStatusSpinner ? (
//           <Spinner size={24} />
//         ) : isLoggedIn ? (
//           <Logout onLogout={this.handleLogout} />
//         ) : (
//           <Login onLogin={this.handleLogin} />
//         )}
//       </div>
//     );
//   }
// }

// export default Auth;

//! Function Component
//! Function Component

import React, { useState, useEffect } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

const Auth = () => {
  const [isStatusSpinner, setIsStatusSpinner] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsStatusSpinner(true);
    setTimeout(() => {
      setIsStatusSpinner(false);
      setIsLoggedIn(true);
    }, 2000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isStatusSpinner ? (
        <Spinner size={24} />
      ) : isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default Auth;
