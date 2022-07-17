// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBBtn,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBDropdownLink,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showBasic, setShowBasic] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

//         <MDBNavbarToggler
//           aria-controls='navbarSupportedContent'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowBasic(!showBasic)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showBasic}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Link</MDBNavbarLink>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBDropdown>
//                 <MDBDropdownToggle tag='a' className='nav-link'>
//                   Cases
//                 </MDBDropdownToggle>
//                 <MDBDropdownMenu>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink href='/Table'> All Cases</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink href='/Table1'>Assigned Cases</MDBDropdownLink>
//                   </MDBDropdownItem>
//                   <MDBDropdownItem>
//                     <MDBDropdownLink href='/Table2'>Unassigned Cases</MDBDropdownLink>
//                   </MDBDropdownItem>
//                 </MDBDropdownMenu>
//               </MDBDropdown>
//             </MDBNavbarItem>

//             <MDBNavbarItem>
//               <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
//                 Disabled
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }




import React from 'react'
import { Button, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const handleLogout=()=>
{
  sessionStorage.clear();
}
const Navba = () => {
  return (
    <>
      <Navbar  className="justify-content-center">
        <NavbarBrand>
         CrimeMaster
        </NavbarBrand>
      </Navbar>
      <Nav>
        <Bars />
        <NavMenu className='mr-auto'>
        <Dropdown>
        <Dropdown.Toggle>
          Control Table
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='/Table'>
            All Cases
          </Dropdown.Item>
          <Dropdown.Item style={{color:'green'}} href='/Table1'>
            Assigned Cases
          </Dropdown.Item>
          <Dropdown.Item style={{color:'red'}}  href='/Table2'>
            Unassigned Cases
          </Dropdown.Item>
          <Dropdown.Item href="#">  
            Reserve
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          <NavLink  to='/AddPs' activeStyle>
            Add Police Station
          </NavLink>
          <NavLink to='/LocDis' activeStyle>
           Location Distribution
          </NavLink>
          <NavLink to='/Stats' activeStyle>
            Statistics
          </NavLink>
        </NavMenu>
        {/* <div class="mx-auto my-2 order-0 order-md-1 position-relative">
        <Dropdown>
        <Dropdown.Toggle variant="#00203FFF">
          Statistics
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='/PieChart'>
            Pie Charts
          </Dropdown.Item>
          <Dropdown.Item style={{color:'green'}} href='/Linegraph'>
            Line Graph
          </Dropdown.Item>
          <Dropdown.Item href="#">  
            Reserve
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div> */}
        {/* <div class="mx-auto my-2 order-0 order-md-1 position-relative">
        <Dropdown>
        <Dropdown.Toggle variant="#00203FFF">
          FILTER
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item style={{color:'orange'}} href='#'>
            Sort By Case Type
          </Dropdown.Item>
          <Dropdown.Item style={{color:'red'}} href='#'>
            Sort By Case Score
          </Dropdown.Item>
          <Dropdown.Item style={{color:'green'}}  href='#'>
            Sort By Location
          </Dropdown.Item>
          <Dropdown.Item href="#">  
            Sort By Status
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div> */}
      <NavLink className={"ms-auto"} style={{color:'red', marginInlineStart:'100px', float:'right'}} to='/' activeStyle
      onClick={handleLogout()} >
            Log Out
          </NavLink>
      </Nav>
    </>
  );
};
export default Navba;
