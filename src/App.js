import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import HomeIndex from './pages/home/HomeIndex';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgetPassword from './pages/auth/ForgetPassword';
import Profile from './pages/profile/Profile';
import PrivateComponent from './pages/PrivateComponent';

import { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollTop from './common/scrollTop/ScrollTop';

import MainHeader from './common/MainHeader/MainHeader';

import LoginProvider from './context/loginContext';
import { LoginContext } from './context/loginContext';
import { Home } from '@mui/icons-material';
import { ToastContainer } from 'react-toastify';

function App() {
  const { loginToken } = useContext(LoginContext);
  console.log({ loginToken });
  console.log('token APP  ', localStorage.getItem('jwtToken'));
  return (
    <Router>
      <div className='App'>
        <ScrollTop />
        <Routes>
          <Route
            path='/'
            element={<HomeIndex />}
          />
          <Route
            path='/login'
            element={<Login />}
          />

          <Route
            path='/signup'
            element={<Signup />}
          />
          <Route
            path='/forget-password'
            element={<ForgetPassword />}
          />
          <Route
            path='/profile'
            element={
              <PrivateComponent token={loginToken}>
                <Profile />
              </PrivateComponent>
            }
          />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
