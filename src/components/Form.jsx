import React, { useState } from "react";
import styled from "styled-components";
import LetterBox from "./LetterBox";
// import Button from "./Button";
// import { data } from "shared/data";

// form 창 수정~~

const StLetterBox = styled.div`
  background-color: lightgray;
  width: 700px;
  height: 500px;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

const Form = ({ letter, setLetter }) => {
  const [nickname, setNickname] = useState("");
  const [contents, setContents] = useState("");

  const [printedChar, setPrintedChar] = useState("RYAN");
  console.log(letter);
  // 닉네임 input창 onChang핸들러
  const onChangeNameHandeler = (event) => {
    setNickname(event.targer.value);
  };

  // 내용 input창 onChang핸들러
  const onChangeContentsHandeler = (event) => {
    setContents(event.targer.value);
  };

  // option창 onChange 핸들러
  const onChangeSelectedHandler = (event) => {
    setSelected(event.targer.value);
  };

  const kakaoFriends = ["RYAN", "APEACH", "TUBE", "CHOONSIK"];
  const [selected, setSelected] = useState("RYAN");

  const [kakao, setKakao] = useState("");
  const nameBtn = (item) => {
    setKakao(item);
  };

  return (
    // 팬레터 박스
    <FormBox
      onSubmit={(event) => {
        event.preventDefault();
        const newReply = {
          id: 7, //uuid()로 수정!!!!!!!!!
          nickname: nickname,
          avatar: "사진",
          contents: contents,
          writeTo: printedChar,
        };
        setPrintedChar([...letter, newReply]);
      }}
    >
      <StLetterBox>
        <div>
          {/* option 사용 */}
          캐릭터 선택 :
          <select value={selected} onChange={onChangeSelectedHandler}>
            {kakaoFriends.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
          <br />닉 네 임 :
          <input
            type="text"
            value={nickname}
            onChange={onChangeNameHandeler}
          ></input>
          <br />내 용 :
          <input
            type="text"
            value={contents}
            onChange={onChangeContentsHandeler}
          ></input>
          <br />
          <button type="submit">팬레터 등록</button>
          <LetterBox
            kakaoFriends={kakaoFriends}
            kakao={kakao}
            setKakao={setKakao}
            nameBtn={nameBtn}
          />
        </div>
      </StLetterBox>
    </FormBox>
  );
};

export default Form;
