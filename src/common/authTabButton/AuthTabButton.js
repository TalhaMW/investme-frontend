import React from 'react'
import { TabButton } from './styles'

function AuthTabButton({ label, name, id }) {
  return (
    <TabButton>
        <input className='d-none' type="radio" name={name} id={id} />
        <label className='block w-full h-10 flex items-center justify-center rounded-[6px] bg-primaryGrayLight3 font-SfPro font-normal text-sm leading-6 text-primaryGray tracking-wide' For={id}>{label}</label>
    </TabButton>
  )
}

export default AuthTabButton