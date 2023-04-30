import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="custom-container">
      <h2>Terms and Condition</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis at
        ipsum cum adipisci. Molestias inventore blanditiis officiis dolorum
        impedit!
      </p>
      <p>
        Go back to <Link to="/register">Register</Link>{" "}
      </p>
    </div>
  );
};

export default Terms;
