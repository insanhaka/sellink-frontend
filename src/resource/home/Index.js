import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';

function Index() {

  useEffect(() => {
    const aktif1 = document.getElementById('home').classList.add('active');
    const aktif2 = document.getElementById('m-home').classList.add('active');

  }, []);

  return (
    <React.Fragment>
    <Navbar/>
      <div className="App" style={{ paddingTop : '8%' }}>
        <div className='container'>
          <Section1/>
          <Section2/>
          <Section3/>
        </div>
        <Section4/>
      </div>
    <Footer/>
    </React.Fragment>
  );
}

export default Index;