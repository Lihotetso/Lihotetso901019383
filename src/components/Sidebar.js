
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Wings Cafe</div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Dashboard</NavLink>
        <NavLink to="/inventory" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Inventory</NavLink>
        <NavLink to="/sales" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Sales</NavLink>
        <NavLink to="/customers" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Customers</NavLink>
        <NavLink to="/reports" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Reports</NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>About Us</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => `sidebar-link${isActive ? ' active' : ''}`}>Contact Us</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
