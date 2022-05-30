import React from "react";
import { useState } from "react";

const Main = (Props) => {
  const [pokemonChoosen, setPokemonChoosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });
  return (
    <div className="DisplaySection">
      {!pokemonChoosen ? (
        <h1>Please choose a Pokemon</h1>
      ) : (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.img} />
          <p>Species: {pokemon.species}</p>
          <p>Type: {pokemon.type}</p>
          <p>HP: {pokemon.hp}</p>
          <p>Attack: {pokemon.attack}</p>
          <p>Defense: {pokemon.defense}</p>
        </>
      )}
    </div>
  );
};

export default Main;
