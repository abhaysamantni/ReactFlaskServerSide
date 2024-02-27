import './App.css';
import React, { useState } from "react";

function App() {
    const [firstName, setFirstName] = useState("")
    const [lastName, getLastName] = useState("")

    const onClick = async(e) => {

    console.log("Button was clicked")

    const requestOptions = {
        method: "GET"
    }



        await fetch("/firstname/", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            //mode: "cors",
            body: JSON.stringify({'firstname':firstName})
        })

    await fetch("/lastname/", requestOptions)
        .then(response => response.json())
        .then(data => getLastName(data.lastname))
        .then(console.log(lastName));
    }


  return (
    <div className="App">
        <h2>Name Finder</h2>
        <label>
            Please enter my first name:
            <br />
            <input value={firstName} name="firstName" onChange={e => setFirstName(e.target.value)} />
            <button onClick={onClick}>Submit</button>
        </label>

        <br />

        <p><strong>{lastName}</strong></p>
    </div>
  );
}

export default App;
