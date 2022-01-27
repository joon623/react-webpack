import React, { useState } from "react";
import styled from "styled-components";
import "./app.css";

type AppType = { 
  text: string
}

function App({text}: AppType) {
  const [number, setNumber] = useState(0);
  console.log(typeof text)
  return (
    <>
      <Div className="app">hello Webpack!!!</Div>
      <div className="test">{text}</div>
    </>
  );
}

export default App;

const Div = styled.div`
  font-size: 50px;
  background-color: blue;
`;
