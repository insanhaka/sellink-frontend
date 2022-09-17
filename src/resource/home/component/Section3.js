import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Broadcast from '../../../assets/img/Broadcast.png';

function Section3() {

  return (
    <div className='row'>
    
        <div className='col-md-6'>
            <Image src={Broadcast} className="img-fluid" alt="Head Image"/>
        </div>
        <div className='col-md-6' style={{padding: '5%', paddingTop: '15%'}}>
            <h2>Kirim informasi dan<br/>penawaran anda</h2>
            <p>Broadcast segala informasi dan penawaran menarik tentang bisnis kamu dengan cepat dan mudah.</p>
        </div>
    
    </div>
  );
}

export default Section3;