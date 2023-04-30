import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import HadithCategory from "./HadithCategory";

const Home = () => {
  //   const hadithData = useLoaderData();
  //   console.log(hadithData);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="flex custom-container">
        <div>
          {data.map((hadithData) => (
            <HadithCategory key={hadithData.id} hadithData={hadithData} />
          ))}
        </div>
        <div>RightNav content</div>
      </div>
    </>
  );
};

export default Home;
