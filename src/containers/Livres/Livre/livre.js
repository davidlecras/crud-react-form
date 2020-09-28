import React from 'react';
import Button from '../../../components/Button/button'

const livre=(props)=>{
  return(
    <>
    <td>{props.title}</td>
    <td>{props.autor}</td>
    <td>{props.pages}</td>
    <td>
      <Button
        btnType="btn-warning"
        clic={props.modifier}
      >
        Modifier
      </Button>
    </td>
    <td>
      <Button
        btnType="btn-danger"
        clic={props.supprimer}
      >
        supprimer
      </Button>
    </td>
    </>
  )
}

export default livre;