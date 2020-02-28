import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
//import SearchForm from "./SearchForm";

const CardHolder = styled.div`
display: flex;
flex-flow: wrap row;
justify-content: space-evenly;
max-width: 100%;
`;

export default function CharacterList() {

  const [characterList, setCharacterList] = useState([]);
  const[query, setQuery] = useState('');

  useEffect(() => {
    
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log("Time to get schwifty ",response);
      const characters = response.data.results.filter(char => 
        char.name.toLowerCase().includes(query.toLowerCase())
        );
      setCharacterList(characters)
    }).catch(error => {
      console.log("We're in for it now, Morty ", error)
    })
  }, [query]);

  const handleChange = event => {
    //event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <section className="character-list">

      <section className="search-form">
      <form>
        <input
        type='text'
        onChange={handleChange}
        value={query}
        name='name'
        placeholder='Search by name'
        autoComplete='off'/>
      </form>
    </section>

      <CardHolder>
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
      </CardHolder>
    </section>
  );
}
