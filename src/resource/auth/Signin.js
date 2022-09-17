import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

function Signin() {

    useEffect(() => {
        const aktif1 = document.getElementById('login').classList.add('active');
        const aktif2 = document.getElementById('m-login').classList.add('active');
    
      }, []);

  return (
    <React.Fragment>
    <Navbar/>
      <div className="App" style={{ paddingTop : '10%' }}>
        <div className='container'>

        <h1>Login Page</h1>
          
        </div>
      </div>
    <Footer/>
    </React.Fragment>
  );
}

export default Signin;