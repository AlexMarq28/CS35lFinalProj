import React from "react";
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import MainProfilePage from "./pages/MainProfilePage";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/RegisterPage">
            <RegisterPage />
            </Route>
          <Route exact path="/MainProfilePage">
            <MainProfilePage />
            </Route>
          <Route exact path="/SearchPage">
            <SearchPage />
            </Route>
          <Route exact path="/LoginPage">
            <LoginPage />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
