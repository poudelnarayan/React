import React, { useState} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const savedUserLoginData = localStorage.getItem('isLoggedIn');

  if (savedUserLoginData === '1') {
    setIsLoggedIn(true);
  }
  /*
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
