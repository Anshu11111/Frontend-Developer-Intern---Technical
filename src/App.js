import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navabar from "./Components/Navabar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Navabar />
        <Home />
      </div>
    </div>
  );
}

export default App;
