import React from 'react';
import PrimaryBlueBtn from '../../common/buttons/PrimaryBlueBtn';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    window.localStorage.removeItem('jwtToken');
    navigate('/login');
  };
  return (
    <>
      <div>
        Profile <br />
      </div>
      <div
        style={{ maxWidth: '200px', marginTop: '20px' }}
        onClick={logoutHandler}
      >
        <PrimaryBlueBtn
          label='Logout'
          type='button'
        />
      </div>
    </>
  );
};

export default Profile;
