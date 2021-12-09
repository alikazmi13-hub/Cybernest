import reactDom from "react-dom";
import React from "react";
import "../Design/Logout.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../Features/userSlice";
const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <div className="Log">
        <h1>
          Welcome <span className="user_name">{user.name}</span>
        </h1>
        {""}
        <button className="logout_btn" onClick={(e) => handleLogout(e)}>
          LOGOUT
        </button>
      </div>
    </>
  );
};
export default Logout;
