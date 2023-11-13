import React from "react";
import styled from "styled-components";

const LetterBox = styled.div`
  background-color: lightgray;
  width: 500px;
  height: 200px;
  border-radius: 15px;
  padding: 30px;
`;

const Form = () => {
  return (
    <LetterBox>
      <div>
        캐릭터 선택 :<input type="text"></input>
        <br />
        닉네임 :<input type="text"></input>
        <br />
        내용 :<input type="text"></input>
        <br />
        <button>팬레터 등록</button>
      </div>
    </LetterBox>
  );
};

export default Form;
