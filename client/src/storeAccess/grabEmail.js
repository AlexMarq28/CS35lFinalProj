import React from "react";
import store from "../store";

export function grabEmail() {
  // grab current state
  const state = store.getState();

  // get the email if the user is authenticated
  const isAuthenticated = state.auth.isAuthenticated;
  //console.log("Auth status is: " + state.auth.isAuthenticated);
  //console.log("Auth status is also: " + isAuthenticated);
  if (isAuthenticated)
    if (state.auth.user) {
      const email = state.auth.user.email;
      console.log("Email is: " + state.auth.user.email);
      console.log("Email is also: " + email);
      return email;
    }
  //console.log("Email is also: " + email);
  //   if (isAuthenticated) {
  //     if (email) {
  //       return false;
  //     } else return false;
  //   } else
  return false;
}
