import React from 'react';
import { HomeHeroStyledContainer } from '../styled';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <HomeHeroStyledContainer>
      <div className='heroSection'>
        <Link
          to='/login'
          className='nav-link'
        >
          Login
        </Link>
        <Link
          to='/signup'
          className='nav-link'
        >
          Sign Up
        </Link>
        <Link
          to='/forget-password'
          className='nav-link'
        >
          Forget Password
        </Link>
      </div>
    </HomeHeroStyledContainer>
  );
}

export default HeroSection;
