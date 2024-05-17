import React from "react";
import Image from "../Image";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import "./index.css";

const Gallery = ({ data, isLoading }) => {
  return (
    <ul className="images-list">
      {isLoading ? (
        <ShimmerSimpleGallery card imageHeight={150} />
      ) : (
        data.map((eachImage) => (
          <Image eachImage={eachImage} key={eachImage.id} />
        ))
      )}
    </ul>
  );
};

export default Gallery;
