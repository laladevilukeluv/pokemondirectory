import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChoosen, setPokemonChoosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  const searchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        console.log(res);
        setPokemon({
          name: pokemonName,
          id: res.data.id,
          img: res.data.sprites.other.dream_world.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          type: res.data,
        });
        setPokemonChoosen(true);
      });
  };

  return (
    <div className="App">
      <div className="title-section">
        <h1>Pokemon Directory</h1>
        <input
          type="text"
          onChange={(event) => setPokemonName(event.target.value.toLowerCase())}
        ></input>
        <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
      <div className="display-section">
        {!pokemonChoosen ? (
          <h1>Search your Pokemon!!!</h1>
        ) : (
          <>
            <h2>
              <span>#{pokemon.id} </span>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <img src={pokemon.img} />
            {pokemon.type.types.length === 2 ? (
              <p>
                Type:
                {pokemon.type.types[0].type.name.charAt(0).toUpperCase() +
                  pokemon.type.types[0].type.name.slice(1)}
                /
                {pokemon.type.types[1].type.name.charAt(0).toUpperCase() +
                  pokemon.type.types[1].type.name.slice(1)}
              </p>
            ) : (
              <p>
                Type:
                {pokemon.type.types[0].type.name.charAt(0).toUpperCase() +
                  pokemon.type.types[0].type.name.slice(1)}
              </p>
            )}
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
export default App;
