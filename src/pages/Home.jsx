import React, { useState } from "react";
import Header from "components/Header";
// import Button from "components/Button";
import Form from "components/Form";
import { data } from "shared/data";
import LetterBox from "components/LetterBox";

const Home = () => {
  const [letter, setLetter] = useState(data);
  // console.log(data);
  console.log(letter);
  return (
    <div>
      <Header />
      {/* <Button letter={letter} setLetter={setLetter} /> */}
      <Form letter={letter} setLetter={setLetter} />
      <LetterBox letter={letter} />
    </div>
  );
};

export default Home;
