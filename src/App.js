import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeIndex from './pages/home/HomeIndex';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgetPassword from './pages/auth/ForgetPassword';
import Profile from './pages/profile/Profile';
import PrivateComponent from './pages/PrivateComponent';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollTop from './common/scrollTop/ScrollTop';

function App() {
  console.log('token APP  ', localStorage.getItem('jwtToken'));
  return (
    // <div className="App">
    //   {/* <HomeIndex/> */}
    //   {/* <Login/> */}
    //   <Signup/>
    // </div>

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
              <PrivateComponent token={localStorage.getItem('jwtToken')}>
                <Profile />
              </PrivateComponent>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
