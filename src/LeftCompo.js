import React from "react";

export const LeftCompo = ({ emoji }) => {
  return (
    <div>
      {emoji === "thumbs_up" && "it's thumbs up"}
      {emoji === "one" && "it's one"}
      {emoji === "two" && "it's two"}
      {emoji === "three" && "it's three"}
      {}
    </div>
  );
};
