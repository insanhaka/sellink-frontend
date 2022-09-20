import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';

import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Menu from '../component/Tabmenu';
import Dashboard from './data/Index';
import Content from './content/Index';
import Broadcast from './broadcast/Index';

function Index() {

  return (
    <React.Fragment>
    <Navbar/>
        <div className="App" style={{ paddingTop : '7%' }}>
            <div className='container-xl'>
                <div className='row'>
                    <div className="nav-align-left">
                        <div className='col-sm-2 pt-5'>
                            <Menu/>
                        </div>
                        <div className='col-sm-10'>
                            <div className="tab-content">
                                <Dashboard/>
                                <Content/>
                                <Broadcast/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </React.Fragment>
  );
}

export default Index;