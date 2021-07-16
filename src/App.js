import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any. Beware infinite loops!
  const [characters, setCharacters] = useState([]);
  const [films] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((resp) => {
        setCharacters(resp.data);
      })
      .catch(() => {
        console.log("server error");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">
        {characters.map((c) => (
          <Character
            data-testid="character"
            key={c.name}
            character={c}
            films={films}
          />
        ))}
      </h1>
    </div>
  );
};

export default App;