import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import Card from 'react-bootstrap/Card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { Dropdown } from 'primereact/dropdown';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';

import Empty from '../../../assets/img/Data-empty.png';


function Index() {

  let params = useParams();
  const apiUrl = useSelector(state => state.ApiReducer);

  const [cekdata, setCekdata] = useState('');
  const [datatable, setDatatable] = useState('');
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);

  const activeTab = localStorage.getItem('tabmenu');

  useEffect(() => {

    if (activeTab === "content") {
      document.getElementById('navs-pills-top-konten').classList.add('active');
      document.getElementById('navs-pills-top-konten').classList.add('show');
    }else {
      document.getElementById('navs-pills-top-konten').classList.remove('active');
      document.getElementById('navs-pills-top-konten').classList.remove('show');
    }

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

const dataStatus = (rowData) => {
  if (rowData.is_active === 1) {
    return <Tag className="mr-2" icon="pi pi-check" severity="success" value="ON"></Tag>;
  }else {
    return <Tag icon="pi pi-times" style={{ backgroundColor: "#778ca3" }} value="OFF"></Tag>;
  }
}

const dataEdit = (rowData) => {
    return <Button icon="pi pi-file-edit" className="p-button-rounded p-button-warning p-button-sm" aria-label="Edit" />;
}

const dataDelete = (rowData) => {
    return <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" aria-label="Delete" />;
}

const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

const template2 = {
  layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
  'RowsPerPageDropdown': (options) => {
      const dropdownOptions = [
          { label: 10, value: 10 },
          { label: 20, value: 20 },
          { label: 50, value: 50 }
      ];

      return (
          <React.Fragment>
              <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
              <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
          </React.Fragment>
      );
  },
  'CurrentPageReport': (options) => {
      return (
          <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
              {options.first} - {options.last} of {options.totalRecords}
          </span>
      )
  }
};

const onCustomPage2 = (event) => {
  setFirst2(event.first);
  setRows2(event.rows);
}

  return (
    <div className="tab-pane fade " id="navs-pills-top-konten" role="tabpanel">
      <Card>
        <Card.Body>
          <div className='row'>
            <div className='col-sm-10'>
              <h2 style={{ marginBottom: 0, marginLeft: 5 }}>Data Content</h2>
            </div>
            <div className='col-sm-2'>
              <Button href="#" className="p-button-sm"><Icon path={mdiPlusCircleOutline} size={1} style={{ marginRight: 5 }} /> Buat</Button>
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
            <DataTable value={datatable} size="small" stripedRows responsiveLayout="scroll" paginator paginatorTemplate={template2} first={first2} rows={rows2} onPage={onCustomPage2} paginatorClassName="justify-content-end" className="mt-6" >
              <Column field="title" header="Nama" sortable></Column>
              <Column field="description" header="Deskripsi" sortable></Column>
              <Column field="link" header="Link"></Column>
              <Column field="is_active" header="Status" body={dataStatus}></Column>
              <Column field="id" header="Edit" body={dataEdit}></Column>
              <Column field="id" header="Delete" body={dataDelete}></Column>
            </DataTable>
          }
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;