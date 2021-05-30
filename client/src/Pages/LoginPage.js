/* ----------------------------------------------------------------------------------------------------*/
/* Ernest (3:37PM, 5/29/2021)
Update: 
I've imported the component 'LoginUser' here and added a call to it in the function below
beneath the code for the header 'This is the Login Page'. 
LoginUser does pretty much the same thing as NewUser, which is to output a couple text-fields and a button
for the user to enter their email and password. 
There is no input-processing yet.
Besides that, everything is the same.

Again, instead of deleting parts of the old code, I've decided to comment out the previous block of code
entirely and enter an updated one, should we ever need to restore to an earlier point.
*/
import LoginUser from "../Components/LoginUser/LoginUser.js"
/* ----------------------------------------------------------------------------------------------------*/

import React from "react";
//import { Link } from "react-router-dom";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";
import Exerciselist from "../Components/ExerciseList";
import ItemModal from "../Components/ItemModal";
import { Container } from "reactstrap";
//import "./App.css";

//Created by Ernest (4:01PM, 5/29/2021)
export default function LoginPage() {
  return (<Provider store={store}>
      <div className="App">
        <AppNavbar />
        <h1>This is the Login Page</h1>
        <LoginUser/>
      </div>
    </Provider>);
}

/* Commented out by Ernest (3:58PM, 5/29/2021)
export default function LoginPage() {
    return (<Provider store={store}>
        <div className="App">
          <AppNavbar />
          <h1>This is the Login Page</h1>
          <LoginUser/>
	  <Container>
            <ItemModal />
            <Exerciselist />
    </Container>
        </div>
      </Provider>);

*/


/*<div>
        <h1>This is the Login Page</h1>
        <Link to="/RegisterPage">Create a new profile</Link><br />
        <Link to="/">Home Page</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;*/
//}
