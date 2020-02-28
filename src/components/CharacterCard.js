import React from "react";
import styled from "styled-components";

const CharCard = styled.div`
background: #1A99E1;
margin: 2px;
width: 32%;
display: flex;
flex-direction: column;

`;

const CharTitle = styled.h2`
background: #69CABC;
`;

const SpeciesP = styled.p`
max-width: 100%;
`;

const CharImage = styled.img`
object-fit: scale;
`;

export default function CharacterCard(props) {
  return (
    <CharCard>
      <CharTitle>Name: {props.name}</CharTitle>
      <SpeciesP>Species: {props.species}</SpeciesP>
      <CharImage src={props.image}></CharImage>
    </CharCard>
  )
}
