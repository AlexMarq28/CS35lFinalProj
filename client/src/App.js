import React, { Component } from "react";
import AppNavbar from "./Components/AppNavbar";
import Exerciselist from "./Components/ExerciseList";
import ItemModal from "./Components/ItemModal";
import { Container } from "reactstrap";

import { Provider } from "react-redux"; //package that binds together react & redux
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      //can access state from our components, provides provides it
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <Exerciselist />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
