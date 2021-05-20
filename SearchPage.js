import React from "react";
import { Link } from "react-router-dom";

export default function SearchPage() {
    return <div>
        <h1>This is the Search Page</h1>
        <Link to="/">Home Page</Link><br />
        <Link to="/MainProfilePage">Return to your profile</Link><br />
        <Link to="/LoginPage">Login to your profile</Link><br />
        <Link to="/RegisterPage">Create a new profile</Link>
        </div>;

}