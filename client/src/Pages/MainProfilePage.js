import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import CardList from "../Components/cards/CardList";
import CardModal from "../Components/cards/CardModal";
import { Container, Row } from "reactstrap";
import "./MainProfilePage.css";
import SearchBar from "../Components/SearchBar";

export default function MainProfilePage() {
  return (
    <Provider store={store}>
      <div className="MainProfilePage">
        <div className="App">
          <AppNavbar />
          <Container>
            <CardModal />
            <CardList />
          </Container>
        </div>
      </div>
    </Provider>
  );
}
