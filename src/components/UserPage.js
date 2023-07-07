import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";

const UserPage = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
