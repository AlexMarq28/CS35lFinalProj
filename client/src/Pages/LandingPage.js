import { FaGithub } from "react-icons/fa";

/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (3:42PM, 5/29/2021)
Update: 
I've created and imported a CSS file 'LandingPage.css' for use in this page; it's listed directly below
within this comment block.
I've also added <div> tags - containing classNames defined within 'LandingPage.css' - to the LandingPage function.
Everything to do with the background image can be done in 'LandingPage.css'.

*/
import "./LandingPage.css";
/* ----------------------------------------------------------------------------------------------------*/

import React from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import PhotoFrame from "../Components/PhotoFrame";
import ItemModal from "../Components/ItemModal";
import PhotoModal from "../Components/PhotoModal";
import { NavLink, Jumbotron, Button, Container } from "reactstrap";
//import "./App.css";

//import LoginUser from "../Components/LoginUser/LoginUser.js";
import HomeUser from "../Components/HomeUser/HomeUser.js";

export default function LandingPage() {
  return (
    <Provider store={store}>
      <div className="LandingPage">
        <div className="App">
          <AppNavbar />
          <div>
      <Jumbotron>
        <h1 className="font-link3" style={{color: "#fffff0", fontSize: 116, paddingTop: 60, paddingBottom: 30}}>WELCOME</h1>
        <p className="lead" style={{color: "#fffff0", fontSize: 24}}>
          {/* <div className="font-link3"> */}
            <span style={{fontWeight: "bold"}}>milestone </span> is the social fitness application for gym rats, weekend warriors, and spring-quarter burnouts.
          {/* </div> */}
        </p>
        <hr className="my-2" />
        <p style={{fontSize: 20, paddingBottom: 48}}>Share your workouts. View posts by others for inspiration. Set new PR's using our built-in stopwatch.</p>
        <p className="lead">
          <Button color="dark" size="lg">
          <NavLink className="font-link3" style={{ color: "#fffff0"}} href="https://github.com/44cjohnson/CS35lFinalProj">
            <FaGithub />{' '} GITHUB
          </NavLink>
          </Button>
        </p>
      </Jumbotron>
    </div>
    {/* 
          <div className="font-link3">
            <h1
              className="landingPageMessage"
              style={{ color: "#fffff0", fontSize: 108 }}
            >
              WELCOME
            </h1>
          </div>
          <div className="team">
            <h2 className="font-link3">CS35L SPRING 2021 PROJECT</h2>
            <h4 className="font-link3">OLUCHI NZEREM</h4>
            <h4 className="font-link3">ALEJANDRO MARQUEZ</h4>
            <h4 className="font-link3">COLIN JOHNSON</h4>
            <h4 className="font-link3">DENVER LEE BROWN</h4>
            <h4 className="font-link3">ERNEST KIM</h4>
          </div>
          */}
        </div>
      </div>
    </Provider>
  );

  /*<PhotoFrame />*/

  /*<div>
        <h1>Welcome to our Exercise Application</h1>
        <Link to="/LoginPage">Login to your profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;
*/
}
