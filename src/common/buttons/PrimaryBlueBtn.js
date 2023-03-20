import React from 'react'
import { PrimaryBtn } from './styled'

const PrimaryBlueBtn = (props) => {
  return (
    <PrimaryBtn>
        <button type={props.type}>{props.label}</button>
    </PrimaryBtn>
  )
}

export default PrimaryBlueBtn