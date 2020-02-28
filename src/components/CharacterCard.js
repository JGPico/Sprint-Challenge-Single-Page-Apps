import React from "react";
//import {useParams, useRouteMatch, Link, Route} from "react-router-dom";
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

  // const {charID} = useParams();
  // const {path, url} = useRouteMatch;

  // const charLoc = props.key.find(el => el.id === Number(charID));

  return (
    <CharCard>
      <CharTitle>Name: {props.name}</CharTitle>
      <SpeciesP>Species: {props.species}</SpeciesP>
      <CharImage src={props.image}></CharImage>
      {/* <Link to={`${url}/LocationsCard`}></Link>
      <Route path={`${path}`/LocationsCard}>

      </Route> */}
    </CharCard>
  )
}
