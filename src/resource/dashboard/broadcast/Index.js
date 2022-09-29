import React, { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function Index() {

  const activeTab = localStorage.getItem('tabmenu');

  useEffect(() => {
    
    if (activeTab === "broadcast") {
      document.getElementById('navs-pills-top-broadcast').classList.add('active');
      document.getElementById('navs-pills-top-broadcast').classList.add('show');
    }else {
      document.getElementById('navs-pills-top-broadcast').classList.remove('active');
      document.getElementById('navs-pills-top-broadcast').classList.remove('show');
    }

  }, []);

  return (
    <div className="tab-pane fade" id="navs-pills-top-broadcast" role="tabpanel">
      <Card>
        <Card.Body className='p-4'>
          <h1>Broadcast Page</h1>
          <br/>
          <p>
              Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder. Bear
              claw
              candy topping.
          </p>
          <p className="mb-0">
              Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly-o
              jelly-o ice
              cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Index;