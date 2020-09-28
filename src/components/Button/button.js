import React from "react";

const button = (props) => {
  const btnCss = `btn ${props.btnType} ${props.css}`;
  return (
    <button className={btnCss} onClick={props.clic}>
      {props.children}
    </button>
  );
};

export default button;
