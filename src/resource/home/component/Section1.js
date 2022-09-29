import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Header1 from '../../../assets/img/Header1.png';

function Section1() {

  return (
    <div className='row'>
    
        <div className='col-md-6'>
            <Image src={Header1} className="img-fluid" alt="Head Image"/>
        </div>
        <div className='col-md-6' style={{padding: '5%', paddingTop: '10%'}}>
            <h1>Tingkatkan bisnis kamu <br/>hanya dengan <b>satu link</b></h1>
            <p>Kami menyediakan layanan digital agar kamu dapat dengan mudah meningkatkan dan mengatur bisnis kamu.</p>
            <Button href="/user/dashboard" variant="primary" style={{ width: '70%', marginTop: 10 }}>Buat Sekarang</Button>
        </div>
    
    </div>
  );
}

export default Section1;