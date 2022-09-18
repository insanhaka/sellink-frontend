import React, { useEffect, useState } from 'react';

function Footer() {

  return (
    <footer className="footer pt-3 mt-5 ">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                    <div className="copyright text-center text-sm text-muted" style={{ fontSize: 12 }}>
                        ©{new Date().getFullYear()} - Sellink || Boosting your business
                        <br/>
                        made with <i className='bx bxs-heart'></i> by <b>Super Team</b>.
                        <br/>
                        Build Version 0.0.1
                    </div>
                </div>
            </div>
        </div>
        <br/>
    </footer>
  );
}

export default Footer;