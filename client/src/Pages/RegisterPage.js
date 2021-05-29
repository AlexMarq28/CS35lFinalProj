//import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
//import Exerciselist from "../Components/ExerciseList";
//import ItemModal from "../Components/ItemModal";
import { Container } from "reactstrap";


/* ----------------------------------------------------------------------------------------------------*/
/*Ernest (4:25PM 5/28/2021)
Description:
I've finished the nonfunctioning version of NewUser component and have imported it to RegisterPage.
As far as changes go, I commented out the old RegisterPage function and pasted in an updated one without 
ItemModal and and ExerciseList, so if anyone wants to restore the old function it's still here on the bottom. 
*/
import NewUser from "../Components/NewUser/NewUser.js";
/* ----------------------------------------------------------------------------------------------------*/


//import "./App.css";



//main().catch(console.error);

//Updated function by Ernest (4:32PM, 5/28/2021)
export default function RegisterPage() {
    return (<Provider store={store}>
        <div className="App">
          <AppNavbar />
 	  <h1 style={{padding: '20px'}}>Create a new profile</h1>
     <Container className="themed-container" fluid={true}>
       <NewUser />
      </Container>
        </div>
      </Provider>);

  //  const [userName, setUserName] = useState("");
   // const [passWord, setPassWord] = useState("");


/* Commented out by Ernest (4:30PM, 5/28/2021)
export default function RegisterPage() {
    return (<Provider store={store}>
        <div className="App">
          <AppNavbar />
 	  <h1>Create a new profile</h1>
     <Container className="themed-container" fluid={true}>
       <NewUser />
      </Container>
          <Container>
            <ItemModal />
            <Exerciselist />
          </Container>
        </div>
      </Provider>);
*/


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