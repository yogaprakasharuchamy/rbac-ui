import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManagement from "./components/PermissionManagement";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>RBAC Admin Dashboard</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>User Management</Link>
          <Link to="/roles" style={{ marginRight: "15px" }}>Role Management</Link>
          <Link to="/permissions">Permission Management</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
