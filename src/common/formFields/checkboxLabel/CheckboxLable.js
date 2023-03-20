import React from 'react'
import { CheckBox } from './styled'

function CheckboxLable(props) {
  return (
    <CheckBox className={props.class}>
        <input type="checkbox" name={props.name} id={props.id}/>
        <label for={props.id}>{props.label}</label>
    </CheckBox>
  )
}

export default CheckboxLable