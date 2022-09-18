import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Header4 from '../../../assets/img/Header4.png';

function Section4() {

  return (
    <div className='container-fluid mt-5' style={{ backgroundColor: '#e9ecfc' }}>
        <div className='row justify-content-center'>
        
            <div className='col-md-5'>
                <Image src={Header4} className="img-fluid" alt="Head Image"/>
            </div>
            <div className='col-md-6' style={{padding: '5%', paddingTop: '10%'}}>
                <h2>Kembangkan dan atur bisnis kamu dengan mudah</h2>
                <p>Hanya dengan satu link, kamu dapat mengetahui customer anda dan melakukan penawaran terbaik keseluruh customer</p>
                <Button href="/dashboard" variant="primary" style={{ width: '70%', marginTop: 10 }}>Coba Gratis</Button>
            </div>
        
        </div>
    </div>
  );
}

export default Section4;