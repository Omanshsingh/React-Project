import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(20);
  const [username, setUsername] = useState("John");
  const [users, setUsers] = useState(["Alice", "Bob", "Charlie"]);
  function changeNum() {
    setNum(10);
    setUsername("Doe");
    setUsers(["Xavier", "Yvonne", "Zach"]);
  }
  return (
    <div>
      <div>
        value is {num} <br />
        username is {username}
        <br />
        users are {users.join(", ")}
      </div>
      <button onClick={changeNum}>Click Me</button>
    </div>
  );
};

export default App;
