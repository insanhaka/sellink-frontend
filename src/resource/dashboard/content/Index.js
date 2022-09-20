import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import DataTable from 'react-data-table-component';

import Empty from '../../../assets/img/Data-empty.png';


const columns = [
  {
      name: 'Title',
      selector: row => row.title,
      sortable: true,
  },
  {
      name: 'Year',
      selector: row => row.year,
      sortable: true,
  },
];

const data = [
  {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]

function Index() {

  return (
    <div className="tab-pane fade " id="navs-pills-top-konten" role="tabpanel">
      <Card>
        <Card.Body>
          <h2>Data Content</h2>
        </Card.Body>
      </Card>
      <br/>
      <Card>
        <Card.Body className='p-4'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <Image src={Empty} className="img-fluid" alt="Empty Image"/>
              <h4>Oopss.. Data kamu tidak ditemukan</h4>
            </div>
          </div>
          {/* <DataTable
              columns={columns}
              data={data}
          /> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;