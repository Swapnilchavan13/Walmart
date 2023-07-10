import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import CountdownTimer from "./components/Timer";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ? <UserPage /> : <LoginPage />}
      <CountdownTimer />
    </div>
  );
};

export default App;
