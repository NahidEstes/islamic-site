import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Hadith from "../../components/Hadith";

const HadithCategory = ({ hadithData }) => {
  const [data, setData] = useState([]);
  const { book_key, nameEnglish, hadith_number, nameBengali } = hadithData;
  const hadithDatas = useLoaderData();
  const handleHadith = () => {
    console.log(hadithData);
    <h1>loading</h1>;
  };
  return (
    <div>
      <Link to={`/hadith/${book_key}`}>
        <h2 onClick={handleHadith} className="font-semibold cursor-pointer">
          {nameEnglish}
        </h2>
      </Link>

      {/* <p>{nameEnglish}</p> */}
    </div>
  );
};

export default HadithCategory;
