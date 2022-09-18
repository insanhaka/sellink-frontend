import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '@mdi/react';
import { mdiFormSelect } from '@mdi/js';
import { mdiGaugeFull } from '@mdi/js';
import { mdiEmailFastOutline } from '@mdi/js';

function Tabmenu() {

  return (
    <ul className="nav nav-pills mb-3" role="tablist" style={{ marginRight: 30 }}>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-dashboard" aria-controls="navs-pills-top-dashboard" aria-selected="true">
              <Icon path={mdiGaugeFull} size={1} /> Dashboard
            </button>
        </li>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-konten" aria-controls="navs-pills-top-konten" aria-selected="false">
              <Icon path={mdiFormSelect} size={1} /> Konten
            </button>
        </li>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-broadcast" aria-controls="navs-pills-top-broadcast" aria-selected="false">
              <Icon path={mdiEmailFastOutline} size={1} /> Broadcast
            </button>
        </li>
    </ul>
  );
}

export default Tabmenu;