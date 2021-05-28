import React from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Container } from "reactstrap";
//import "./App.css";

export default function MainProfilePage() {
    return (<Provider store={store}>
        <div className="App">  
	<AppNavbar />
	<h1>This is the Main Profile Page</h1>
          <Container>
            <ItemModal />
            <Exerciselist />
          </Container>
        </div>
      </Provider>);



/*
<div>
        <h1>This is the Main Profile Page</h1>
        <Link to="/">Home Page</Link><br />
        <Link to="/LoginPage">Login to another profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link><br />  
        <Link to="/SearchPage">Search profiles</Link>
        </div>;*/
}