import CreateUser from "./UserForm/CreateUser";
import UserList from "./UserForm/UserList";
import { useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age }];
    });
  };

  return (
    <>
      <CreateUser onCreateUser={createUserHandler} />;
      <UserList users={userList} />;
    </>
  );
};

export default App;
