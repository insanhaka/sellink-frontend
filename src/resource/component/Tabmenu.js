import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Icon from '@mdi/react';
import { mdiFormSelect } from '@mdi/js';
import { mdiGaugeFull } from '@mdi/js';
import { mdiEmailFastOutline } from '@mdi/js';

function Tabmenu() {

  const activeTab = localStorage.getItem('tabmenu');

  const dashboardClick = () => {
    localStorage.removeItem('tabmenu');
    document.getElementById('dashboard-tab').classList.add('active');
    localStorage.setItem('tabmenu', 'dashboard');
  }
  const contentClick = () => {
    localStorage.removeItem('tabmenu');
    document.getElementById('content-tab').classList.add('active');
    localStorage.setItem('tabmenu', 'content');
  }
  const broadcastClick = () => {
    localStorage.removeItem('tabmenu');
    document.getElementById('broadcast-tab').classList.add('active');
    localStorage.setItem('tabmenu', 'broadcast');
  }

  useEffect(() => {
    
    if (activeTab === "dashboard") {
      document.getElementById('dashboard-tab').classList.add('active');
    }else if (activeTab === "content") {
      document.getElementById('content-tab').classList.add('active');
    }else if (activeTab === "broadcast") {
      document.getElementById('broadcast-tab').classList.add('active');
    }else {
      document.getElementById('dashboard-tab').classList.add('active');
    }

  }, []);

  return (
    <ul className="nav nav-pills mb-3 position-fixed" role="tablist" style={{ marginRight: 30 }}>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link" id='dashboard-tab' onClick={dashboardClick} role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-dashboard" aria-controls="navs-pills-top-dashboard" aria-selected="false">
              <Icon path={mdiGaugeFull} size={1} /> Dashboard
            </button>
        </li>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link" id='content-tab' onClick={contentClick} role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-konten" aria-controls="navs-pills-top-konten" aria-selected="false">
              <Icon path={mdiFormSelect} size={1} /> Konten
            </button>
        </li>
        <li className="nav-item mb-3">
            <button type="button" className="nav-link" id='broadcast-tab' onClick={broadcastClick} role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-top-broadcast" aria-controls="navs-pills-top-broadcast" aria-selected="false">
              <Icon path={mdiEmailFastOutline} size={1} /> Broadcast
            </button>
        </li>
    </ul>
  );
}

export default Tabmenu;