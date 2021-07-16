// Write your Character component here
import React from "react";
import portal from "../images/portal.gif";
import styled from "styled-components";

const StyledChar = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  border: 0.5rem solid #0fd819;
  background-image: url(${portal});
  background-repeat: no-repeat;
  background-size: 100% 101.5%;
  width: 45%;
  margin: 0 auto;
  margin-top: 6%;
  padding: 0.5%;
  padding-top: 0%;
  padding-bottom: 8%;

  img {
    width: 50%;
    height: 50%;
  }

  h2 {
    font-size: 55px;
    font-family: Creepster;
    font-weight: bold;
    background-color: black;
    width: 101.5%;
    margin-top: 0px;
    color: #05b1c9;
    color: #fffff0;
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 0px;
    color: #fffff0;
    background-color: black;
    padding: 0.2em;
  }
`;
const Character = (props) => {
  return (
    <StyledChar className="container">
      <h2>{props.character.name}</h2>
      {props.character.species === "Human" ? (
        <p>Species: {props.character.species} </p>
      ) : (
        <p>Species: {props.character.species} </p>
      )}
      <p>Status: {props.character.status}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Origin: {props.character.origin.name}</p>
      <p>Location: {props.character.location.name}</p>
      <img src={props.character.image} />
    </StyledChar>
  );
};

export default Character;
