import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  /*
  const savedUserLoginData = localStorage.getItem('isLoggedIn');

  if (savedUserLoginData === '1') {
    setIsLoggedIn(true);
  }

  Huge disadvantage of this approcah is that wee would create an infinite loop.
  Because we check for loggedinData being stored  , If it is stores we set loggedin to true.
  and whenever we call a state setting function , the component function re-executes and therefore the loop continues.
  So we need to use a different approach.
  We need to use useEffect here. that allows us to control when the function runs

  */




  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const savedUserLoginData = localStorage.getItem('isLoggedIn');

    if (savedUserLoginData === '1') {
      setIsLoggedIn(true);
    }

  }, []  // dependencies array
  );

  /*
  Now this useEffect function is executed by react and is executed after every component re-evaluation.
  so whenever the APP function run , thereafter , useEffect will run. and if the state in the useEffect changes the component 
  will run again , But it will not just run after every component evaluation , but only if the dependecies  provided at useEffect 
  changes.

  For this epecific example , the dependencies array is empty anf thus the code do not executes again and again .
  That means, the code in useEffect run only once during the first execution. 


  */

  const logoutHandler = () => {
    localStorage.clear('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
