import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get("https://andomuser.me/api/?results=20");
        const { data } = users;
        setUsers(data.results);
      } catch (ex) {
        setError("Something went wrong");
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <h1> {error} </h1>}
      {!error && <Result users={users} />}
    </div>
  );
}

function Result(props) {
  const { users } = props;
  return (
    <div>
      {users.length ? (
        users.map((currentUser) => {
          return (
            <div>
              <span> {currentUser.name.first} </span>
              <span> {currentUser.name.last} </span>
              <img src={currentUser.picture.medium} />
            </div>
          );
        })
      ) : (
        <div className="loader"></div>
      )}
    </div>
  );
}
export default Users;
