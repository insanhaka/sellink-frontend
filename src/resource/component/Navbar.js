import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import {
    Link
} from "react-router-dom";
import Icon from '@mdi/react'
import { mdiHomeOutline } from '@mdi/js';
import { mdiNewspaperVariantOutline } from '@mdi/js';
import { mdiInformationOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiLogoutVariant } from '@mdi/js';
import { mdiGaugeFull } from '@mdi/js';
import '../../assets/css/active-menu.css';


function Navbar() {

    const [Auth, setAuth] = useState(false);

    const token = "f4k3T0k3n";

    // const token = localStorage.getItem('passport');
    // const pisah = token.split('#');
    // const mytoken = pisah[3];

    useEffect(() => {
        
        if (token !== null) {
            setAuth(true)
        }

    }, []);


  return (
    <React.Fragment>
    
    <nav className="navbar navbar-expand-lg blur bg-white blur-rounded top-0 z-index-3 shadow my-3 py-2 start-0 end-0 mx-4 d-none d-sm-block d-sm-none d-md-block position-fixed" style={{ borderRadius: 30 }}>
        <div className="container-fluid pe-3">
            <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 pt-3" href="/">
                <h4>SELLINK</h4>
            </a>
            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon mt-2">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav mx-auto ms-xl-auto me-4">
                    
                    {Auth
                        ?   <React.Fragment>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" style={{ padding: 0, marginRight: 15 }}>
                                        <Button className="menu" id="home" variant="white" size="sm" style={{ fontSize: 14 }}>
                                            Home
                                        </Button>
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Button className="menu" id="home" variant="white" size="sm" style={{ fontSize: 14, marginRight: 18  }}>
                                        Menu
                                    </Button>
                                </li> */}
                                <li className="nav-item">
                                    <div className="btn-group">
                                        <button className="btn btn-light btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ fontSize: 14 }}>
                                            Hi, User Contoh
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-center" aria-labelledby="dropdownMenuButton">
                                            <li>
                                                <a className="dropdown-item" href="/dashboard" style={{ fontSize: 13 }}><Icon path={mdiGaugeFull} size={1} /> Dashboard</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="/account" style={{ fontSize: 13 }}><Icon path={mdiAccountOutline} size={1} /> Account</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#" style={{ fontSize: 13 }}><Icon path={mdiLogoutVariant} size={1} /> Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </React.Fragment>
                        :   <React.Fragment>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" style={{ padding: 0, marginRight: 15 }}>
                                        <Button className="menu" variant="white" size="sm" id="home" style={{ fontSize: 14 }}>
                                            Home
                                        </Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signup" className="nav-link" style={{ padding: 0, marginRight: 15 }}>
                                        <Button className="menu" variant="white" size="sm" id="signup" style={{ fontSize: 14 }}>
                                            Daftar
                                        </Button>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link" id="login" style={{ padding: 0 }}>
                                        <Button className="menu" variant="primary" id="login" size="sm" style={{ fontSize: 14 }}>
                                            Masuk
                                        </Button>
                                    </Link>
                                </li>
                            </React.Fragment>
                    }

                </ul>
            </div>
        </div>
    </nav>

    {/* Mobile Nav */}
    <Nav className="navbar navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none" style={{ backgroundColor : '#fff' }}>
        <ul className="navbar-nav nav-justified w-100">
            <li className="nav-item">
                <Link to="/" className="nav-link" id="m-home">
                    <Icon path={mdiHomeOutline} size={1} />
                    <br/>
                    Home
                </Link>
            </li>
            
            <li className="nav-item">
                <Link to="/portofolio" className="nav-link" id="m-portofolio">
                    <Icon path={mdiNewspaperVariantOutline} size={1} />
                    <br/>
                    Portofolio
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/about" className="nav-link" id="m-about">
                    <Icon path={mdiInformationOutline} size={1} />
                    <br/>
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/login" className="nav-link" id="m-signup">
                    <Icon path={mdiAccountOutline} size={1} />
                    <br/>
                    Account
                </Link>
            </li>
        </ul>
    </Nav>
    </React.Fragment>
  );
}

export default Navbar;