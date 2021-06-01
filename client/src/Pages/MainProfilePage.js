import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import ExerciseList from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Container, Row } from "reactstrap";
import "./MainProfilePage.css";
import SearchBar from "../Components/SearchBar";

export default function MainProfilePage() {
  return (
    <Provider store={store}>
      <div className="MainProfilePage">
        <div className="App">
          <AppNavbar />
          <div className="font-link">
            <h1
              className="MainProfilePageMessage"
              style={{ color: "#fffff0", fontSize: 72 }}
            >
              FEED WHERE CARDS WILL GO
            </h1>
          </div>
          <Container>
            <ItemModal />
            <ExerciseList />
          </Container>
        </div>
      </div>
    </Provider>
  );
}
