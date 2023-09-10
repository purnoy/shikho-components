import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="h-screen w-full bg-yellow-100">
      <Button color="pink" variant="primary" size="medium">
        Call Me
      </Button>
    </div>
  );
}

export default App;
