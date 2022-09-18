import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

// Pages Import
import Home from './resource/home/Index';
import Signin from './resource/auth/Signin';
import Signup from './resource/auth/Signup';

import Dashboard from './resource/dashboard/Index';

const PrivateRoute = () => {
  const token = localStorage.getItem('passport');

  // if (authorization.isAuth) {
  if (token !== null) {
    return <Outlet />
  }else {
    return <Navigate to="/login"/>
  }

}

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/login" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />

            <Route path="/dashboard" element={<Dashboard/>}/>

            {/* <Route path='/dashboard' element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route> */}

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}