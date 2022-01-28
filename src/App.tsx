import React, { useState } from "react";
import styled from "styled-components";
import "./app.css";

type AppType = {
  text: string;
};

function App({ text }: AppType) {
  const [number, setNumber] = useState<number>(0);

  return (
    <>
      <Div className="app">hello Webpack!!!</Div>
      <div className="test">{text}</div>
      <div className="test">github action succeed</div>
    </>
  );
}

export default App;

const Div = styled.div`
  font-size: 50px;
  background-color: blue;
`;
