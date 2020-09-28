import React from 'react';

const alert=(props)=>{
  const classAlertType=`alert text-center ${props.alertType}`
  return(
    <div className={classAlertType} role="alert">
  {props.children}
</div>
  )
}

export default alert;