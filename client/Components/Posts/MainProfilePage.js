import React from "react";
import { Link } from "react-router-dom";

export default function MainProfilePage() {
    return <div>
        <h1>This is the Main Profile Page</h1>
        <Link to="/">Home Page</Link><br />
        <Link to="/LoginPage">Login to another profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link><br />  
        <Link to="/SearchPage">Search profiles</Link>
        </div>;
}