import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listofUsers, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setUsers(response.data)
    })
  }, []);

  return (
    <div className="App">
      <div className="userDisplay">
        {listofUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
