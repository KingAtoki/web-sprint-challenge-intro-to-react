import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 12px;
`;

const Film = ({ filmURL }) => {
  const [title, setTitle] = useState();

  useEffect(() => {
    axios.get(filmURL).then((resp) => {
      setTitle(resp.data.title);
    });
  }, [filmURL]);

  return <Title>{title}</Title>;
};

export default Film;