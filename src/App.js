import React from "react";
import styled from "styled-components";
import "./app.css";

function App() {
  return (
    <>
      <Div className="app">hello Webpack!!!</Div>
      <div className="test">test</div>
    </>
  );
}

export default App;

const Div = styled.div`
  font-size: 50px;
  background-color: blue;
`;
