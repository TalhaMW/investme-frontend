import React from 'react';
import PrimaryBlueBtn from '../../common/buttons/PrimaryBlueBtn';
import { useNavigate } from 'react-router-dom';

import { useTabContext } from '@mui/base';
import { LoginContext } from '../../context/loginContext';
import { useContext } from 'react';
import { Slide } from 'react-toastify';
import { toast } from 'react-toastify';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Profile = () => {
  const { setLoginToken } = useContext(LoginContext);
  const navigate = useNavigate();

  // const notify = (msg) => toast(msg, { autoClose: 500, closeOnClick: true });

  const logoutHandler = () => {
    setLoginToken(localStorage.removeItem('jwtToken'));
    navigate('/login');
    toast.info('You are Successfully Logout', {
      position: toast.POSITION.TOP_CENTER,
      transition: Slide,
      autoClose: 100,
      hideProgressBar: true,
      pauseOnHover: true,
    });
  };
  return (
    <div className=' h-[100vh] flex justify-center items-center'>
      <div className='w-full bg-slate-100   max-w-[300px] h-[50%] flex flex-col justify-center items-center rounded-sm shadow-md '>
        <div className=''>
          <AccountCircleIcon style={{ width: '100px', height: '100px' }} />
        </div>

        <div
          className='w-full'
          style={{ maxWidth: '200px', marginTop: '20px' }}
          onClick={logoutHandler}
        >
          <PrimaryBlueBtn
            label='Logout'
            type='button'
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
