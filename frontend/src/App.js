import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])
  return (
    <div>
      <h1 className="title">Users</h1>
      {users.map((user, idx) => (
        <ul key={idx} className="users-list">
          <li>{user.firstname}</li>
          <li>{user.lastname}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
