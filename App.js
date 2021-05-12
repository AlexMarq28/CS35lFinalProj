import React from "react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Home from "./Pages/Home";
import OurTeam from "./Pages/OurTeam";
import Training from "./Pages/Training";
import Articles from "./Pages/Articles";
import Portfolio from "./Pages/Portfolio";
import JoinUs from "./Pages/JoinUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //as is renaming it

function App() {
  return (
    //everything in between Router can be routed
    // switch stops the process of going through all routes, stops after reaching one
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/training" component={Training} />
          <Route path="/articles" component={Articles} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/joinus" component={JoinUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
