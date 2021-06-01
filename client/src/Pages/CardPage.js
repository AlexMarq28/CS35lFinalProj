import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import CardModal from "../Components/CardModal";
import { Container, Row } from "reactstrap";
import "./MainProfilePage.css";
import SearchBar from "../Components/SearchBar";

export default function CardPage() {
  return (
    <Provider store={store}>
      <div className="CardPage">
        <div className="App">
          <AppNavbar />
          <div className="font-link"></div>
          <Container>
            <CardModal />
          </Container>
        </div>
      </div>
    </Provider>
  );
}
