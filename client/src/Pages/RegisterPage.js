//import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Container } from "reactstrap";
//import "./App.css";







//main().catch(console.error);

export default function RegisterPage() {
  //  const [userName, setUserName] = useState("");
   // const [passWord, setPassWord] = useState("");



    return (<Provider store={store}>
        <div className="App">
          <AppNavbar />
 	  <h1>Create a new profile</h1>
          <Container>
            <ItemModal />
            <Exerciselist />
          </Container>
        </div>
      </Provider>);



/*<div>
        <h1>Create a new profile</h1>
        <form onSubmit={createProfile}>
            <input 
                onChange={(e) => setUserName(e.target.value) }
                placeholder="profile name" /><br />
            <input 
                type="password"
                onChange={(e) => setPassWord(e.target.value) }
                placeholder="password" /><br />
            <button type="submit">Create profile</button>
        </form>
        <Link to="/">Home Page</Link><br />
        <Link to="/LoginPage">Login to your profile</Link><br />
        <Link to="/MainProfilePage">Return to your profile</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;*/
};