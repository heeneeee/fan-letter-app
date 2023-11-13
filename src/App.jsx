import React from "react";
import Header from "components/Header";
// import Button from "components/Button";
import styled from "styled-components";
import Form from "components/Form";

const SimpleButton = styled.button`
  width: 100px;
  height: 25px;
  background: lightyellow;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 20px;
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <div>
      <Header />
      <StBtn>
        <SimpleButton>RYAN</SimpleButton>
        <SimpleButton>APEACH</SimpleButton>
        <SimpleButton>TUBE</SimpleButton>
        <SimpleButton>CHOONSIK</SimpleButton>
      </StBtn>
      <Form />
    </div>
  );
};

export default App;
