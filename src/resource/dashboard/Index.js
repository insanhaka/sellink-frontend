import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Menu from '../component/Tabmenu';
import Dashboard from './component/Dashboard';
import Content from './component/Content';
import Broadcast from './component/Broadcast';

function Index() {

  return (
    <React.Fragment>
    <Navbar/>
        <div className="App" style={{ paddingTop : '10%' }}>
            <div className='container-xl'>
                <div className="nav-align-left">
                    <Menu/>
                    <div className="tab-content">
                        <Dashboard/>
                        <Content/>
                        <Broadcast/>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </React.Fragment>
  );
}

export default Index;