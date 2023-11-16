import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-radius: 30px;
  position: absolute;
  top: 190px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;

const LetterBox = ({ letter, kakao, kakaoFriends, nameBtn }) => {
  console.log(kakaoFriends);
  console.log(letter);
  return (
    <div>
      {letter
        .filter((item) => {
          return item.writedTo === kakao;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.nickname}</p>
              <p>{item.contents}</p>
            </div>
          );
        })}

      <StBody>
        <StBtn>
          <List>
            {/* data 배열에 writedTo랑 kakaoFriends 배열의 값이랑 비교 */}
            {kakaoFriends.map((data) => {
              return (
                // {data} --> children 으로 전달해줌
                // nameBtn 으로 전달해줌
                // 설명듣기 ...
                // <Button></Button> --> 이놈은 함수임!! 그래서 바로 옆
                // nameBtn 을 인자값으로 받는 거임 실행시킬 함수 자체를 넘겨준다
                <Button nameBtn={() => nameBtn(data)}>{data}</Button>
              );
            })}
          </List>
        </StBtn>
      </StBody>
    </div>
  );
};

export default LetterBox;
