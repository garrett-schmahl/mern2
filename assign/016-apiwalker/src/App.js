import { Router } from "@reach/router";
import axios from "axios";
import React, { saveState, useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("https://swapi.dev/api/").then((result) => console.log(result));
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });

    errorCheck(e);
  };

  return (
    <div className="App">
      <div className="header">
        <form>
          <div className="inputBox">
            <label htmlFor="swTopic">Search For:</label>
            <select name="swTopic" onChange={onChange}>
              <option value="">Planet</option>
              <option>Person</option>
              <option>Vehicle</option>
            </select>
          </div>
          <div className="inputBox">
            <label htmlFor="id">ID:</label>
            <input type="text" name="id"></input>
          </div>
          <button type="submit">Search</button>
        </form>
      </div>

      <Router>
        <landing path="/" />
        <planetDetail path="/planetdetail/:id" />
        <personDetail path="/persondetail/:id" />
        <vehicleDetail path="/vehicledetail/:id" />
      </Router>
    </div>
  );
}

export default App;
