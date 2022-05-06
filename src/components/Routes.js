import React from 'react'
import Navbar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from '../pages/ControlRoomTable';
import AddPs from '../pages/AddPoliceStation';
import LocDis from '../pages/LocationDistribution';
import Statistics from '../pages/Statistics';
import Log from '../pages/Login';
import Table1 from '../pages/AssignedCases';
import Table2 from '../pages/UnassignedCases';
const NavCheck=()=>{
    return(
         <Router>
           <Routes>
           <Route path='/Log' exact element={<Log />}/>
           </Routes>
        <Navbar />
        <Routes>
          <Route path='/' exact element ={<Table />}/>
          <Route path='/Table1' element={<Table1 />} />
          <Route path='/Table2' element= {<Table2 />} />
          <Route path='/Table' element={<Table />} />
          <Route path='/AddPs' element={<AddPs />} />
          <Route path='/LocDis' element={<LocDis />} />
          <Route path='/Statistics' element={<Statistics />} />
        </Routes>
      </Router>
    );
};
export default NavCheck;