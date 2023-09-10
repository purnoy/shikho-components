import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen w-full bg-red-200">
      <Button variant="primary" color="blue" size="medium">
        Call Me
      </Button>
    </div>
  );
}

export default App;
