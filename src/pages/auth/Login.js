import React, { useState } from 'react';
import { AuthGrid, LeftSide, RightSide } from './styled';

import AuthTabButton from '../../common/authTabButton/AuthTabButton';
import InputEmail from '../../common/formFields/email/InputEmail';
import InputPassword from '../../common/formFields/password/InputPassword';
import CheckboxLable from '../../common/formFields/checkboxLabel/CheckboxLable';
import PrimaryBlueBtn from '../../common/buttons/PrimaryBlueBtn';

import { useEffect } from 'react';

import { Navigate, useNavigate } from 'react-router-dom';
function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  console.log(formData);

  const { email, password } = formData;

  const inputChangeHandler = (e) => {
    console.log(e.target.name);

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('clicked');
    try {
      const response = await fetch('http://localhost:9000/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response.status);

      const responseData = await response.json();
      if (response.status === 200) {
        await window.localStorage.setItem('jwtToken', responseData);
        navigate('/profile');
      } else {
        if (responseData.message) {
          setErrorMsg({ message: JSON.parse(responseData.message) });
        } else {
          setErrorMsg(responseData);
        }
      }
    } catch (e) {
      // console.log('-->> ', e.message);
    }
  };

  console.log({ token: window.localStorage.getItem('jwtToken') });

  console.log({ errorMsg });

  return (
    <AuthGrid>
      <LeftSide className='p-8 lg:ml-28'>
        <div className='content'>
          <a href='#'>
            <img
              width='172px'
              height='34px'
              src='assets/images/icons/site-logo.png'
              alt='site logo'
            />
          </a>

          <h1 className='font-Inter font-medium text-[32px] leading-10 text-white max-w-[359px] mt-14'>
            An Investment Platform for Everyone
          </h1>
          <p className='font-Inter font-normal text-base leading-5 text-white max-w-[330px] mt-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            lectus viverra non fringilla lobortis dignissim lorem enim.
          </p>
        </div>
      </LeftSide>
      <RightSide className='md:p-8 p-3 flex justify-center items-center'>
        <div className='max-w-[506px] w-full min-h-[510px] pt-10 pb-8 sm:px-14 px-4 bg-white boxShadow rounded-lg'>
          <h2 className='font-SfPro font-semibold text-2xl leading-8 text-primaryBlack text-center'>
            Login
          </h2>

          <form
            action=''
            onSubmit={onSubmit}
          >
            <div className='w-full p-2 bg-primaryGrayLight2 grid md:grid-cols-3 gap-2 rounded-lg mt-6'>
              <AuthTabButton
                label='Asset Owner'
                name='UserType'
                id='AssetOwner'
              />
              <AuthTabButton
                label='Investor'
                name='UserType'
                id='Investor'
              />
              <AuthTabButton
                label='Accountant'
                name='UserType'
                id='Accountant'
              />
            </div>
            {/* <p className='mt-8'>{errorMsg}</p> */}
            <div className='mt-8'>
              {errorMsg.message ? (
                errorMsg.message.map((msg) => {
                  return <p>{msg.msg}</p>;
                })
              ) : (
                <p>{errorMsg}</p>
              )}
            </div>
            <div className='mt-8'>
              <InputEmail
                label='Email Address'
                placeholder='Enter email'
                name='email'
                inputChangeHandler={inputChangeHandler}
                value={email}
              />
            </div>

            <div className='mt-8'>
              <InputPassword
                label='Password'
                placeholder='Enter password'
                name='password'
                inputChangeHandler={inputChangeHandler}
                value={password}
              />
            </div>

            <div className='flex items-center justify-between gap-1 flex-wrap mt-2'>
              <CheckboxLable
                label='Remember me'
                name='rememberme'
                id='rememberMe'
                class='flex items-center gap-2'
              />
              <a
                className='font-SfPro font-medium text-sm leading-5 text-primaryBlue no-underline'
                href='#'
              >
                Forgot Password?
              </a>
            </div>

            <div className='mt-8'>
              <PrimaryBlueBtn
                type='submit'
                label='Login'
              />
            </div>

            <p className='mt-6 font-SfPro font-normal text-sm leading-6 text-primaryGray text-center'>
              {' '}
              Don’t have an account?{' '}
              <a
                className='text-primaryBlue'
                href='#'
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </RightSide>
    </AuthGrid>
  );
}

export default Login;
