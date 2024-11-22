import React, { useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Editor", status: "Inactive" },
  ]);

  const addUser = () => {
    const name = prompt("Enter user name:");
    const role = prompt("Enter user role:");
    setUsers([...users, { id: Date.now(), name, role, status: "Active" }]);
  };

  const toggleStatus = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    ));
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={addUser}>Add User</button>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => toggleStatus(user.id)}>Toggle Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
