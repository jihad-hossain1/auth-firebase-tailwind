import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../Provider/AuthPorvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContexts);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Auth-Master</a>
        <Link className="btn btn-ghost normal-case text-xl btn-sm" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl btn-sm" to="/login">
          Log-In
        </Link>
        <Link className="btn btn-ghost normal-case text-xl btn-sm" to="/order">
          Orders
        </Link>
        {user && (
          <Link
            className="btn btn-ghost normal-case text-xl btn-sm"
            to="/profile"
          >
            Profile
          </Link>
        )}
        <Link
          className="btn btn-ghost normal-case text-xl btn-sm"
          to="/register"
        >
          Register
        </Link>
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Log out
            </button>
          </>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
