import React from "react";
import Image from "../Image";
import "./index.css"

const Gallery = ({ data }) => {
  return (
    <ul className="images-list">
      {
        data.map((eachImage) => 
            <Image eachImage={eachImage} key={eachImage.id} />
        )
      }
    </ul>
  );
};

export default Gallery;
