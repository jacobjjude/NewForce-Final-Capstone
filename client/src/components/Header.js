import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../Managers/UserManager";
import "../App.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        YourPlace
      </Link>
      <Link to="/users" className="navbar-brand">
        Users
      </Link>
      <Link to="/messages">Messages</Link>
      {/* <button onClick={logout}>Log Out</button> */}
    </nav>
  );
};

export default Header;
