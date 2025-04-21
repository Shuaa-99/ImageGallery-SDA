import React from "react";
import "../styles/style.css";

const Picture = ({ photographer, src }) => {
  return (
    <div className="picture">
    <div className="imageContainer">
        <img src={src} alt={photographer}  />

         </div>

        <div className="info">
               <p>{photographer}</p>
        </div>
    </div>
  );
};

export default Picture;
