import React from 'react'
import Navbar from './NavBar';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Table from '../pages/ControlRoomTable';
import AddPs from '../pages/AddPoliceStation';
import LocDis from '../pages/LocationDistribution';
import Stats from '../pages/Statistics';
import Log from '../pages/Login';
import Table1 from '../pages/AssignedCases';
import Table2 from '../pages/UnassignedCases';
import PieChart from '../pages/Piechart';
import Linegraph from '../pages/LineGraph';
const AuthCheck=()=>{
  const authenticated=sessionStorage.getItem("Auth");
    return(
         <BrowserRouter>
        <Routes>
                <Route path='/Table1'  element={<Table1 />} />
                <Route path='/Table2'  element= {<Table2 />} />
                <Route path='/Table'  element={<Table />} />
                <Route path='/AddPs'  element={<AddPs />} />
                <Route path='/LocDis'  element={<LocDis />} />
                <Route path='/Stats'  element={<Stats />} />
        </Routes>
         </BrowserRouter>
    );
};
export default AuthCheck;