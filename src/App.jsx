import React from "react";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";

function App() {
  return (
    <div className="">
      <div className="mx-2 flex justify-center min-h-screen items-center">
        <LoginPage></LoginPage>
        <RegisterPage></RegisterPage>
      </div>
    </div>
  );
}

export default App;
