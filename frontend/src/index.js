import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Route,Routes} from  'react-router-dom';
import "./modules/css/globle.css";
import Loginpage from './modules/auth/Loginpage';
import Registorpage from './modules/auth/Registorpage';
import Mycard from './modules/dashboard/Mycard';
import Navbarpage from './modules/shares/Navbarpage';
import UserView from './modules/dashboard/UserView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbarpage/>
      <Routes>
        <Route path='' element={<Loginpage/>}/>
        <Route path='registor' element={<Registorpage/>}/>
        <Route path='userdashboard' element={<Mycard/>}/>
        <Route path='userdashboard/view/:id' element={<UserView/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

