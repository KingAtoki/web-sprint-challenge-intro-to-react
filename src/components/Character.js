// Write your Character component here
import React from "react";
import styled from "styled-components";
// import Films from "./Films";

const Card = styled.div`
  border: 1px solid black;
  background-color: white;
  width: 300px;
  margin: 4px;
  padding: 4px;
  h1 {
    font-size: 14px;
  }
  span {
    font-size: 10px;
  }
`;

const Character = ({ character: { name, birth_year, films } }) => {
  return (
    <Card>
      <h1>{name}</h1>
      <span>{birth_year}</span>
      {/* <Films films={films} /> */}
    </Card>
  );
};

export default Character;