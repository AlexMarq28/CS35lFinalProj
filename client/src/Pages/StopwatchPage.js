import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
// import Exerciselist from "../Components/ExerciseList";
// import ItemModal from "../Components/ItemModal";
import { Container, Row } from "reactstrap";
import "./StopwatchPage.css";

import Stopwatch from "../Components/Stopwatch.js";
import ItemModal from "../Components/ItemModal";
import ExerciseList from "../Components/ExerciseList";

export default function StopwatchPage() {
  return (
    <Provider store={store}>
      <div className="StopwatchPage">
        <div className="App">
          <AppNavbar />
          <div className="font-link3">
            <h1
              className="StopwatchPageMessage"
              style={{ color: "black", fontSize: 40 }}
            >
              STOPWATCH
            </h1>
          </div>
          <Container>
            <Stopwatch />
          </Container>
          <div>
            <ItemModal />
            <ExerciseList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
