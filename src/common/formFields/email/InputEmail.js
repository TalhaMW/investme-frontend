import React from 'react';
import { EmailInput } from './styled';

function InputEmail(props) {
  return (
    <EmailInput>
      <label className='font-SfPro font-normal text-base leading-5 text-primaryBlack block mb-2 tracking-wide'>
        {props.label}
      </label>
      <input
        onChange={props.inputChangeHandler}
        className='w-full py-2 px-3 rounded-md font-SfPro text-sm leading-6 text-primaryBlack placeholder:text-primaryGrayLight4 bg-white tracking-wide'
        type='email'
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
      />
    </EmailInput>
  );
}

export default InputEmail;
