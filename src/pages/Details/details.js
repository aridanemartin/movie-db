import React from "react";
import { useParams } from "react-router-dom";

export const Details = () => {
  const { movieId } = useParams();
  return <div>{movieId}</div>;
};
