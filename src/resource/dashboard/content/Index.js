import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '@mdi/react';
import { mdiFileDocumentEditOutline } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPlusCircleOutline } from '@mdi/js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';

import Empty from '../../../assets/img/Data-empty.png';


function Index() {

  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Link',
        selector: row => row.link,
        sortable: true,
    },
    {
      name: "",
      cell: row => <Button className='btn-sm' variant='warning' onClick={()=> {
        console.log(row.year);
      }}> <Icon path={mdiFileDocumentEditOutline} size={0.8} /> </Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "",
      cell: row => <Button className='btn-sm' variant='danger' onClick={()=> {
        console.log(row.year);
      }}> <Icon path={mdiDeleteOutline} size={0.8} /> </Button>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
      headCells: {
          style: {
              fontSize: 14,
              backgroundColor: '#d3d9f8',
          },
      },
  };
  
  const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        link: 'http://localhost:3000/dashboard',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        link: 'http://localhost:3000/dashboard',
    },
  ]

  return (
    <div className="tab-pane fade " id="navs-pills-top-konten" role="tabpanel">
      <Card>
        <Card.Body>
          <div className='row'>
            <div className='col-sm-10'>
              <h2 style={{ marginBottom: 0, marginLeft: 5 }}>Data Content</h2>
            </div>
            <div className='col-sm-2'>
              <Button href="#"><Icon path={mdiPlusCircleOutline} size={1} /> Buat</Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <br/>

      <Card>
        <Card.Body className='p-4'>
          {/* <div className='row justify-content-center'>
            <div className='col-md-6'>
              <Image src={Empty} className="img-fluid" alt="Empty Image"/>
              <h4>Oopss.. Data kamu tidak ditemukan</h4>
            </div>
          </div> */}
          <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
          />
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;