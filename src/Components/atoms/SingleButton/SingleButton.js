import React from 'react';
import style from './SingleButton.module.css'

const SingleButton = (props) => {
  return (
    <>
    <button className={style.ButtonStyle}>
        <props.icon />
       {props.title} 
    </button>
    </>
  )
}

export default SingleButton