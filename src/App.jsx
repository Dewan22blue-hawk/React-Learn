import React from "react";
import Button from "./components/Elements-atom/Button";
function App() {
  return (
    <div className="">
      <div className="mx-2 flex justify-center min-h-screen items-center text-red-200">
        <Button classes="bg-red-500">Hallo</Button>
        <Button classes="bg-blue-500" />
        <Button classes="bg-green-500" />
      </div>
    </div>
  );
}

export default App;
