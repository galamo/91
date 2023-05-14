import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const users = await axios.get("https://randomuser.me/api/?results=20");
        const { data } = users;
        setUsers(data.results);
      } catch (ex) {}
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.length
        ? users.map((u) => {
            return (
              <div>
                <span>{u.name.first}</span>
                <img src={u.picture.medium} />
              </div>
            );
          })
        : "Loading...."}
    </div>
  );
}

export default Users;
