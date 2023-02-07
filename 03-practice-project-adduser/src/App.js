import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userInfoList, setUserInfoList] = useState([]);

  const addUserHandler = (userInfo) => {
    setUserInfoList((prevUserInfo) => {
      return [userInfo, ...prevUserInfo];
    });
  };

  const deleteUserHandler = (userID) => {
    setUserInfoList((prevUserInfo) => {
      const updatedUsers = prevUserInfo.filter((user) => user.id != userID);
      return updatedUsers;
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList userListItem={userInfoList} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
