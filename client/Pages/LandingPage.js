import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return <div>
        <h1>Welcome to our Exercise Application</h1>
        <Link to="/LoginPage">Login to your profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;

}