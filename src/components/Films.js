import React from "react";
import Film from "./Film";

const Films = ({ films }) => {
  return (
    <>
      {films.map((f) => (
        <Film key={f} filmURL={f} />
      ))}
    </>
  );
};

export default Films;
