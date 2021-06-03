import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import { Container, Row, Col} from "reactstrap";
import "./SearchPage.css";
import SearchBar from "../Components/SearchBar";
import CardSearch from "../Components/cards/CardSearch";
import CardSearchByTitle from "../Components/cards/CardSearchByTitle";
import CardSearchByAuthor from "../Components/cards/CardSearchByAuthor";


export default function SearchPage() {
  return (
    <Provider store={store}>
      <div className="SearchPage" style={{height: "100vh"}}>
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
          <Row>
            <Col xs="2"></Col>
            <Col>
              <Container>
                <div style={{paddingBottom: 0}}>
                  <SearchBar />
                </div>
                <div style={{paddingBottom: 0}}>
                  <CardSearch />
                </div>
                <div style={{paddingBottom: 0}}>
                  <CardSearchByTitle />
                </div>
                <div style={{paddingBottom: 0}}>
                  <CardSearchByAuthor />
                </div>
              </Container>
            </Col>
            <Col xs="2"></Col>
          </Row>
        </div>
      </div>
    </Provider>
  );
}
