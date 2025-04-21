import React from "react";
import data from "../helper/data";
import Picture from "../components/Picture";
import "../styles/style.css";

const Homepage = () => {
  return (
    <div >
      
        <h1> Image Gallery </h1>
        <div className="pictures">

    
      {data.map((item) => (
        <Picture 
         key={item.id} 
         photographer={item.photographer} 
         src={item.src.large} />
      ))}
          </div>
    </div>
  );
};

export default Homepage;
