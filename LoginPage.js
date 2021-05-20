import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return <div>
        <h1>This is the Login Page</h1>
        <Link to="/RegisterPage">Create a new profile</Link><br />
        <Link to="/">Home Page</Link><br />
        <Link to="/SearchPage">Search profiles</Link>
        </div>;
}