import React from "react";
import Card from "./Card.jsx";
import {contacts} from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name={contacts[0].name} contactNumber={contacts[0].phone} email={contacts[0].email} imgURL={contacts[0].imgURL}/>
      <Card name={contacts[1].name} contactNumber={contacts[1].phone} email={contacts[1].email} imgURL={contacts[1].imgURL}/>
      <Card name={contacts[2].name} contactNumber={contacts[2].phone} email={contacts[2].email} imgURL={contacts[2].imgURL}/>
    </div>
  );
}

export default App;
