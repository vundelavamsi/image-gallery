import React from "react";
import "./index.css";

const Image = ({ eachImage }) => {
  return (
    <li className="each-image">
      <img src={eachImage.urls.small} className="image" />
      <div className="image-description">
        <span>{eachImage.alt_description}</span>
      </div>
    </li>
  );
};

export default Image;