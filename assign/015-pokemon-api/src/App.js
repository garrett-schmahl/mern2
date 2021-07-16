import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeShow, setPokeShow] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results))
      .then(console.log("refreshed"))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <button onClick={() => setPokeShow(true)}>Pokemon</button>
      <div>
        {pokeShow == true &&
          pokemon.map((pokemon, index) => {
            return <div key={index}>{pokemon.name}</div>;
          })}
      </div>
    </div>
  );
}

export default App;
