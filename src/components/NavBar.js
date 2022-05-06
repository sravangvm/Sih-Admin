import React from 'react'
import { Button, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navba = () => {
  return (
    <>
      <Navbar  className="justify-content-center">
        <NavbarBrand>
         Website Name
        </NavbarBrand>
      </Navbar>
      <Nav>
        <Bars />
        <NavMenu className='mr-auto'>
        <Dropdown>
        <Dropdown.Toggle variant="#00203FFF">
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
          <NavLink to='/statistics' activeStyle>
            Statistics
          </NavLink>
        </NavMenu>
        <div class="mx-auto my-2 order-0 order-md-1 position-relative">
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
        </div>
      </Nav>
    </>
  );
};
export default Navba;
