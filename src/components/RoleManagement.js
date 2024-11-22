import React, { useState } from "react";

function RoleManagement() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const addRole = () => {
    const name = prompt("Enter role name:");
    setRoles([...roles, { id: Date.now(), name, permissions: [] }]);
  };

  return (
    <div>
      <h2>Role Management</h2>
      <button onClick={addRole}>Add Role</button>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ") || "None"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleManagement;
