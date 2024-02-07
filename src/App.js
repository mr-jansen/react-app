import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/signin" Component={SigninPage} exact />
      </Routes>
    </Router>
  );
}

export default App;
