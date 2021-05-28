import React from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import PhotoFrame from "../Components/PhotoFrame";
import ItemModal from "../Components/ItemModal";
import PhotoModal from "../Components/PhotoModal";
import { Container } from "reactstrap";
//import "./App.css";

export default function LandingPage() {
    return (<Provider store={store}>
        <div className="App">
          <AppNavbar />
          <h1>Welcome to our Exercise Application</h1>
	  <Container>
            <ItemModal />
            <PhotoModal />
            <Exerciselist />
            <PhotoFrame />
          </Container>
        </div>
      </Provider>);





        /*<div>
        <h1>Welcome to our Exercise Application</h1>
        <Link to="/LoginPage">Login to your profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;
*/
}