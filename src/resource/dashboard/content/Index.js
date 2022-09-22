import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '@mdi/react';
import { mdiFileDocumentEditOutline } from '@mdi/js';
import { mdiDeleteOutline } from '@mdi/js';
import { mdiPlusCircleOutline } from '@mdi/js';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

// import DataTable from 'react-data-table-component';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import Empty from '../../../assets/img/Data-empty.png';


function Index() {

//   const columns = [
//     {
//         name: 'Title',
//         selector: row => row.title,
//         sortable: true,
//     },
//     {
//       name: 'Description',
//       selector: row => row.description,
//       sortable: true,
//     },
//     {
//         name: 'Link',
//         selector: row => row.link,
//         sortable: true,
//     },
//     {
//       name: "",
//       cell: row => <Button className='btn-sm' variant='warning' onClick={()=> {
//         console.log(row.year);
//       }}> <Icon path={mdiFileDocumentEditOutline} size={0.8} /> </Button>,
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//     {
//       name: "",
//       cell: row => <Button className='btn-sm' variant='danger' onClick={()=> {
//         console.log(row.year);
//       }}> <Icon path={mdiDeleteOutline} size={0.8} /> </Button>,
//       ignoreRowClick: true,
//       allowOverflow: true,
//       button: true,
//     },
//   ];

//   const customStyles = {
//       headCells: {
//           style: {
//               fontSize: 14,
//               backgroundColor: '#d3d9f8',
//           },
//       },
//       rows: {
//           style: {
//               maxWidth: 'fit-content', // override the row height
//           },
//       },
//       cells: {
//           style: {
//             width: 'fit-content',
//           },
//       },
//   };
  
  // const data = [
  //   {
  //       id: 1,
  //       title: 'Beetlejuice',
  //       link: 'http://localhost:3000/dashboard',
  //   },
  //   {
  //       id: 2,
  //       title: 'Ghostbusters',
  //       link: 'http://localhost:3000/dashboard',
  //   },
  // ];

  let params = useParams();
  const apiUrl = useSelector(state => state.ApiReducer);

  const [cekdata, setCekdata] = useState('');
  const [datatable, setDatatable] = useState('');

  useEffect(() => {
    axios.get(
        apiUrl.url+'user/content/1',
        // { headers: apiToken.key}
    ).then(function (response) {
        // All Data
        const data = response.data.data;
        const message = response.data.message;

        setCekdata(message);
        setDatatable(data);

    })
    .catch(function (error) {
        console.log("error nih");
    });

}, []);

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

          {cekdata === "empty"
            ? 
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                  <Image src={Empty} className="img-fluid" alt="Empty Image"/>
                  <h4>Oopss.. Data kamu tidak ditemukan</h4>
                </div>
              </div>
            :
            <DataTable value={datatable} responsiveLayout="scroll">
              <Column field="title" header="TITLE"></Column>
              <Column field="link" header="LINK"></Column>
            </DataTable>

            // <DataTable
            //     columns={columns}
            //     data={datatable}
            //     customStyles={customStyles}
            // />
          }
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;