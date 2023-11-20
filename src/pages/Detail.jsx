import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const LetterBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
const StDetailContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  width: 1000px;
  height: 600px;
  border-radius: 50px;
`;

const DetailContents = styled.p`
  border: 0.5px solid grey;
  border-radius: 20px;
  display: flex;
  justify-content: Center;
  width: 800px;
  height: 120px;
`;

const CreatedAt = styled.span`
  margin-top: 50px;
  margin-inline-start: 500px;
`;
const WritedTo = styled.span`
  margin-top: 50px;
  font-weight: initial;
  font-size: 25px;
`;
const Nickname = styled.div`
  margin-top: 50px;
`;
const HomeBtn = styled.button`
  height: 30px;
  width: 80px;
  border-radius: 10px;
  border: 1px solid yellow;
  margin-bottom: 50px;
`;

const Buttons = styled.section`
  margin-top: 10px;
  display: flex;
  margin-inline-start: 580px;
`;

const DeleteBtn = styled.button`
  margin: 10px;
  border-radius: 15px;
  border: none;
  width: 90px;
  height: 30px;
  color: #3a3636;
  background-color: lightblue;
  box-shadow: 0px 0px 1px 1px rgba(157, 173, 182, 0.644);
`;

const EditBtn = styled.button`
  margin: 10px;
  border-radius: 15px;
  border: none;
  width: 90px;
  height: 30px;
  color: #3a3636;
  background-color: lightblue;
  box-shadow: 0px 0px 1px 1px rgba(157, 173, 182, 0.644);
`;

const Avarta = styled.div`
  margin-top: 50px;
  border-radius: 50%;
`;

const Textarea = styled.textarea`
  border: 0px;
  border-radius: 20px;
  display: flex;
  justify-content: Center;
  background-color: lightyellow;
  width: 800px;
  height: 110px;
  margin: 0px;
  /* margin: 30px; */
`;
const Detail = ({ letter, setLetter }) => {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  // 1. ui 먼저 구현
  // 2. 더미데이터 이용해서 우선 값을 불러와보기
  // 3. 해당하는 아이디 값 불러오기 (map함수 순회해서 새로운 배열 반환)

  // const [newContent, setNewContent] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const toggleisEdit = () => setIsEdit(!isEdit);

  const deleteTo = (item) => {
    // console.log(item);
    const deleted = letter.filter((data) => {
      return data.id !== item.id;
    });
    setLetter(deleted);
  };

  return (
    <LetterBody>
      <StDetailContainer>
        {letter.map((item) => {
          if (item.id === params.id) {
            return (
              <div key={item.id}>
                <div>
                  <HomeBtn
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    HOME
                  </HomeBtn>
                </div>
                <WritedTo>To. {item.writedTo}</WritedTo>
                <CreatedAt>{item.createdAt}</CreatedAt>

                <DetailContents>
                  {isEdit ? (
                    <>
                      <Textarea />
                    </>
                  ) : (
                    [item.contents]
                  )}
                </DetailContents>
                <Buttons>
                  {isEdit ? (
                    <>
                      <EditBtn onClick={toggleisEdit}>수정완료</EditBtn>
                    </>
                  ) : (
                    <>
                      <EditBtn onClick={toggleisEdit}>수정하기</EditBtn>
                    </>
                  )}
                  <DeleteBtn
                    onClick={() => {
                      deleteTo(item);
                    }}
                  >
                    삭제하기
                  </DeleteBtn>
                </Buttons>

                <Avarta>
                  <img src={item.avarta} alt="img" />
                </Avarta>
                <Nickname>From. {item.nickname}</Nickname>
              </div>
            );
          }
        })}
      </StDetailContainer>
    </LetterBody>
  );
};

export default Detail;
