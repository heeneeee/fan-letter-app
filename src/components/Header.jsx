import React from "react";
import styled from "styled-components";
import kakaoFriends from "./kakaoFriends.png";

const StBox = styled.div`
  text-align: center;
  font-size: 50px;
  color: lightskyblue;
`;

const StBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
// const StImg = styled.img`
//   img {
//     background-image: url(${kakaoFriends});
//     margin: 0px;
//     width: 100vw;
//     height: 100vh;
//     background-size: cover;
//     background-repeat: no-repeat;
//   }
// `;

const Header = () => {
  return (
    <StBody>
      <StBox>
        <img
          src={kakaoFriends}
          alt="background-img"
          style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
          }}
        ></img>
        <div>KakaoFriends Fan Letter</div>
      </StBox>
    </StBody>
  );
};

export default Header;
