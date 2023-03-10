import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ContentLoader, { Instagram } from 'react-content-loader'

const Image = (props) => {
  const [isLoaded,setIsLoaded] = useState(false);
  return (
    <>
      {isLoaded?null:<Instagram width={props.LoaderWidth} height={props.LoaderHeight} backgroundColor="#D3D3D3"/>}
    <img
      key={props.key}
      src={props.source}
      width={props.width}
      height={props.height}
      style={isLoaded?{ objectFit: props.ObjectFit, borderRadius: props.borderRadius}:{display:"none"}}
      onLoad={()=>setIsLoaded(true)}
    />
    </>
  );
};

export default Image;
