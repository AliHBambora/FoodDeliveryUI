import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = (props) => {
  return (
    <LazyLoadImage
      key={props.key}
      src={props.source}
      width={props.width}
      height={props.height}
      style={{ objectFit: props.ObjectFit, borderRadius: props.borderRadius }}
      effect="blur"
    />
  );
};

export default Image;
