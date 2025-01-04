import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import MainRouter from "../Component/MainRouter.jsx";

function App() {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
}

export default App;
