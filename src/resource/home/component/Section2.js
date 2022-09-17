import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import Header2 from '../../../assets/img/Header2.png';

function Section2() {

  return (
    <div className='row'>
    
        <div className='col-md-6' style={{padding: '5%', paddingTop: '15%'}}>
            <h2>Sesuaikan mini website <br/>dengan mudah</h2>
            <p>Atur dan sesuaikan tampilan mini website untuk menarik calon customer kamu.</p>
        </div>
        <div className='col-md-6'>
            <Image src={Header2} className="img-fluid" alt="Head Image"/>
        </div>
    
    </div>
  );
}

export default Section2;