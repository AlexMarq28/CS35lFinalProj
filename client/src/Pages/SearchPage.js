import React from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import { Container, Row } from "reactstrap";
import "./SearchPage.css";
import SearchBar from "../Components/SearchBar";
//import "./App.css";

export default function SearchPage() {
  return (
    <Provider store={store}>
      <div className="SearchPage">
        <div className="App">
          <AppNavbar />
          <div className="font-link3">
            <h1
              className="SearchPageMessage"
              style={{ color: "#fffff0", fontSize: 72 }}
            >
              SEARCH
            </h1>
          </div>
          <Container>
            <SearchBar />
          </Container>
        </div>
      </div>
    </Provider>
  );
}
