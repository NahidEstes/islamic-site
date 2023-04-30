import React from "react";

const HadithCategory = ({ hadithData }) => {
  const { nameEnglish, hadith_number, nameBengali } = hadithData;

  const handleHadith = () => {
    console.log("ddd");
  };
  return (
    <div>
      <h2 onClick={handleHadith} className="font-semibold cursor-pointer">
        {nameEnglish}
      </h2>
    </div>
  );
};

export default HadithCategory;
