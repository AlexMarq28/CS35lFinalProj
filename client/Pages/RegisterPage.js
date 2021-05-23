import React, { useState } from "react";
import { Link } from "react-router-dom";

const mongodb = require('mongodb');
//const { ClientEncryption } = require('mongodb-client-encryption');
//const { MongoClient } = require('mongodb').MongoClient;
//const mongoose = require('mongoose');

//async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    //const uri = "mongodb+srv://OluchiApp:cs35l@cluster0.c8qdd.mongodb.net/ExerciseProfiles?retryWrites=true&w=majority";
 
   // mongoose.connect(uri, {
   //     
 //   })
    //const client = new MongoClient(uri);
 
    //try {
        // Connect to the MongoDB cluster
 //       await client.connect();
 
        // Make the appropriate DB calls
  //      await  listDatabases(client);
 
  //  } catch (e) {
 //       console.error(e);
  //  } finally {
   //     await client.close();
  //  }
//}

//main().catch(console.error);

export default function RegisterPage() {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");

    const createProfile = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/createProfile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                passWord
            }),
        });
    };

    return <div>
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
        </div>;
}