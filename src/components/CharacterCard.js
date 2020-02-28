import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Species: {props.species}</p>
      <img src={props.image}></img>
    </div>
  )
}
