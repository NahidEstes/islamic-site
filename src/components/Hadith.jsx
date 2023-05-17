import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Hadith = () => {
  // const hadithBook = useLoaderData();
  // console.log(hadithBook);

  const { book_name } = useParams();
  const [hadithIndex, setHadithIndex] = useState([]);

  useEffect(() => {
    fetch(`https://alquranbd.com/api/hadith/${book_name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHadithIndex(data);
      });
  }, []);
  return (
    <>
      <div className="custom-container">
        {hadithIndex.map((hadith) => (
          <div>
            <h1>{hadith.nameBengali}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hadith;
