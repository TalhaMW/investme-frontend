import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
const MainHeader = ({ children, token }) => {
  console.log(token, 'in mheaders');
  return (
    <>
      <div className='flex justify-between'>
        <h1>Investme</h1>
        <ul className='flex gap-[10px]'>
          <li>
            <Link
              className='nav-link'
              to='/'
            >
              Home
            </Link>
          </li>
          {token ? (
            <li>
              <Link
                to='/profile'
                className='nav-link'
              >
                Profile
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to='/login'
                  className='nav-link'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to='/signup'
                  className='nav-link'
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}

          <li>
            <Link
              to='/forget-password'
              className='nav-link'
            >
              Forget Password
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MainHeader;
