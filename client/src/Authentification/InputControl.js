import React from 'react'

import "../CSS/InputControl.css"

const InputControl = (props) => {
  return (
    <div className='InputControl '>
       {
        props.label && <label>{props.label}</label>
       } 

       <input type="text" {...props} />
    </div>
  )
}

export default InputControl