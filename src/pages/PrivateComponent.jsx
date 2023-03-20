import React from 'react';
import { Navigate } from 'react-router-dom';
const PrivateComponent = ({ children, token }) => {
  function showComponnet() {
    if (token) {
      return children;
    } else {
      return <Navigate to='/login' />;
    }
  }
  return <div>{showComponnet()}</div>;
};

export default PrivateComponent;
