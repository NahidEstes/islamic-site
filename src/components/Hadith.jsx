import React from "react";
import { useLoaderData } from "react-router-dom";

const Hadith = () => {
  const loaders = useLoaderData();
  console.log(loaders);
  return <div>Hadith</div>;
};

export default Hadith;
