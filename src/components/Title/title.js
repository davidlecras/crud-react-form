import React from 'react';
import classes from "./title.module.css"

const title=(props)=>{
  const monCss= `${classes.policeTitre} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
  return(
    <h1 className={monCss}> {props.children}</h1>
  )
}

export default title;