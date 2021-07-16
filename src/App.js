import React, { useState, useEffect } from "react";
import Character from "./components/Character.js";
import styled from "styled-components";
import axios from "axios";
import logo from "./images/rick-and-morty-theme-ct9.jpg";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((success) => {
        console.log("success", success);
        setCharacter(success.data.results);
      })

      .catch((fail) => console.log("get fail", fail));
  }, []);

  const StyledImg = styled.img`
    padding-top: 6%;
    width: 50%;
  `;
  const StyledH1 = styled.h1`
    color: #fffff0;
    padding: 0.3rem;
    font-family: Creepster;
    background-color: black;
    padding: 2rem;
    max-width: 100%;
    font-size: 3rem;
    margin-bottom: 50px;
  `;
  return (
    <div className="App">
      <StyledImg img src={logo} />
      <StyledH1>
        <iframe
          src="https://giphy.com/embed/da0NgyClHpA4jqUoav"
          width="50%"
          height="370"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/stickers/rickandmorty-season-4-episode-rick-and-morty-da0NgyClHpA4jqUoav"></a>
        </p>
        Lets Meet The Crew!
      </StyledH1>
      {character.map((char) => (
        <Character key={char.id} character={char} />
      ))}
    </div>
  );
};

export default App;
