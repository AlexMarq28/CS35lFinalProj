import React, { useEffect } from "react";
//import AppNavbar from "./Components/AppNavbar";
//import Exerciselist from "./Components/ExerciseList";
//import ItemModal from "./Components/ItemModal";
//import { Container } from "reactstrap";

/* Ernest (11:15 AM, 5/27/21)
Description: First attempt at a commit.
I've commented out the following code so nothing need blow up in case something goes wrong with it.
The import statements listed below are to import all the pages from 'Pages'. 
If I have it correct, the aim is to have the 'App' function use client-side routing to access the various pages.
All we need to do is to set up all the links in the 'App' function to jump to each page.
After we set that up, we can work on how we want each page to look.
Link: https://www.youtube.com/watch?v=yQf1KbGiwiI
*/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import MainProfilePage from "./Pages/MainProfilePage";

//import { Provider } from "react-redux"; //package that binds together react & redux
import store from "./store";
import { loadUser } from "./actions/authActions";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/MainProfilePage">
            <MainProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

//FUTURE PAGES
/*
          <Route exact path="/SearchPage">
            <SearchPage />
          </Route>
*/

/*
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      //can access state from our components, provides provides it
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <Exerciselist />
          </Container>
        </div>
      </Provider>
    );
  }
}
*/
export default App;
