import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log("Time to get schwifty ",response);
      setCharacterList(response.data.results)
    }).catch(error => {
      console.log("We're in for it now, Morty ", error)
    })
  }, []);

  return (
    <section className="character-list">
      {characterList.map(char => {
        return (
          <CharacterCard 
           key={char.id}
           name={char.name}
           species={char.species}
           image={char.image}
           />
        )
      })}
    </section>
  );
}
