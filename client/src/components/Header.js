import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../Managers/UserManager";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-info">
      <Link to="/" className="navbar-brand">
        YourPlace
      </Link>
      {/* <button onClick={logout}>Log Out</button> */}
    </nav>
  );
};

export default Header;
