import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {BrowserRouter,Route,Routes} from  'react-router-dom';
import "./modules/css/globle.css";
import Loginpage from './modules/auth/Loginpage';
import Registorpage from './modules/auth/Registorpage';
import Userdashboard from './modules/dashboard/Userdashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Loginpage/>}/>
        <Route path='registor' element={<Registorpage/>}/>
        <Route path='userdashboard' element={<Userdashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

