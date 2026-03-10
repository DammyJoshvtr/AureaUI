import { image } from "@/constant/image";
import React from "react";
import { Image } from "react-native";

const EllipseBlur = () => {
  return (
    <React.Fragment>
      {/* First Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute left-20 bottom-48"
        resizeMode="contain"
      />

      {/* Left Blur Ellipse */}
      <Image
        source={image.ellipseBlur}
        className="absolute right-16 top-24"
        resizeMode="contain"
      />
    </React.Fragment>
  );
};

export default EllipseBlur;
