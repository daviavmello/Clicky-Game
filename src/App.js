import React from 'react';
import './App.css';

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import Eleven from "./components/Eleven";
import Mike from "./components/Mike";
import Will from "./components/Will";
import Lucas from "./components/Lucas";


function App() {
  return (
   <Wrapper>
     <Title>Stranger Game</Title>
     <Eleven />
     <Mike />
     <Will />
     <Lucas />
   </Wrapper>
  );
}

export default App;
