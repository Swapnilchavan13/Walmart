import React from "react";
import { useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import CountdownTimer from "./components/Timer";
import TodoList from "./components/Todos";
import ExampleComponent from "./components/Example";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="App">
      {isLoggedIn ? <UserPage /> : <LoginPage />}
      <CountdownTimer />
      <ExampleComponent />
      <TodoList />
    </div>
  );
};

export default App;
