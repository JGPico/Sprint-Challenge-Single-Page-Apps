import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
background: #1A99E1;
`;

const CharTitle = styled.h2`
background: #69CABC;
`;

export default function CharacterCard(props) {
  return (
    <CharCard>
      <CharTitle>Name: {props.name}</CharTitle>
      <p>Species: {props.species}</p>
      <img src={props.image}></img>
    </CharCard>
  )
}
