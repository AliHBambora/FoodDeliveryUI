import React from 'react'

const Image = (props) => {
  return (
    <img src={props.source} style={{height:props.height,width:props.width,objectFit:props.ObjectFit}} />
  )
}

export default Image