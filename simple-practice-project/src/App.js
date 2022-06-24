import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUser = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, { username: uName, age: uAge, id: Math.random().toString() }];
    });


  };
  return (
    <>
      <AddUser onAddUser={addUser} />
      <UserList users={userList} />
    </>
  );
}

export default App;
