import React, { useState } from "react";

function PermissionManagement() {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "Read" },
    { id: 2, name: "Write" },
    { id: 3, name: "Delete" },
  ]);

  const addPermission = () => {
    const name = prompt("Enter permission name:");
    setPermissions([...permissions, { id: Date.now(), name }]);
  };

  return (
    <div>
      <h2>Permission Management</h2>
      <button onClick={addPermission}>Add Permission</button>
      <ul>
        {permissions.map((perm) => (
          <li key={perm.id}>{perm.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PermissionManagement;
