import React from "react";
import { Provider } from "react-redux"; //package that binds together react & redux
import store from "../store";
import AppNavbar from "../Components/AppNavbar";

export default function ProfilePage() {
  // grab current state
  const state = store.getState();
  const isAuthenticated = state.auth.isAuthenticated;
  if (isAuthenticated) {
    if (state.auth.user) {
      const userName = state.auth.user.name;
      const email = state.auth.user.email;
      return (
        <Provider store={store}>
          <AppNavbar />
          <div>
            <h1>Login Info:</h1>
            <h3>Username: {userName}</h3>
            <h3>Email: {email}</h3>
          </div>
        </Provider>
      );
    }
  }
  return (
    <Provider store={store}>
      <AppNavbar />
      <div>
        <h1>Need to login to see info.</h1>
      </div>
    </Provider>
  );
}
