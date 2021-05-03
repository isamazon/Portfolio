import React from "react";
import "./App.css";
//
// Components
import Home from "./home";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
