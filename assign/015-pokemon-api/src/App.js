import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118")
      .then((response) => response.json())
      .then((response) => setPokemon(response.results))
      .catch((err) => {
        console.log(err);
      }, []);
  });
  return (
    <div className="App">
      <button>Fetch Pokemon</button>
      {pokemon.length > 0 &&
        pokemon.map((pokemon, index) => {
          return <div key={index}>{pokemon.name}</div>;
        })}
    </div>
  );
}

export default App;
