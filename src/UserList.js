import { useEffect, useState } from "react";
import axios from "axios";
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });
  return (
    <div className="users">
      <ul>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
