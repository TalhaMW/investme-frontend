import styled from 'styled-components';

export const AuthGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media screen and (max-width:991px){
    grid-template-columns: 1fr;
  }

  &::before{
    content: '';
    height: 100%;
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;

    background-color: #3454CF;
    background-image: url('/assets/images/auth_images/auth-bg.png');
    background-repeat: no-repeat;
    background-position:top right;
    background-size: cover;

    @media screen and (max-width:991px){
      content: unset;
    }
  }

  &::after{
    content: '';
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;

    background-color: #F8FAFF;

    @media screen and (max-width:991px){
      content: unset;
    }
  }
`;

export const LeftSide = styled.div`
 @media screen and (max-width:991px){
    background-color: #3454CF;
    background-image: url('/assets/images/auth_images/auth-sm-bg.png');
    background-repeat: no-repeat;
    background-position:center right;
    background-size: cover;
  }
`;

export const RightSide = styled.div`

`;

// Forget Password, Check Email, Create New password Layout
export const AuthOneCol = styled.div`

  min-height: 100vh;
  padding: 30px;
  background-image: url('/assets/images/auth_images/OneCol-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:420px){
    padding: 15px;

    background-size: 100% 100%;
  }
`;