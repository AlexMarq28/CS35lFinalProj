import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Container, Row } from "reactstrap";
import "./StopwatchPage.css";
import SearchBar from "../Components/SearchBar";

import Stopwatch from "../Components/Stopwatch.js";

export default function StopwatchPage() {
  return (
    <Provider store={store}>
      <div className="StopwatchPage">
        <div className="App">
          <AppNavbar />
          <div className="font-link3">
            <h1
              className="StopwatchPageMessage"
              style={{ color: "black", fontSize: 72 }}
            >
              STOPWATCH OF DEATH
            </h1>
          </div>
          <Container>
            <Stopwatch />
          </Container>
        </div>
      </div>
    </Provider>
  );
}
