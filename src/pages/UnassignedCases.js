import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/NavBar";
import { io } from "socket.io-client";


function Table2() {

  const [cases,setCases]=useState(null);
  const [location,setLocation]=useState("Hyderabad");
  const socket = io("https://secrep.herokuapp.com/admin", {
      reconnectionDelayMax: 10000,
      extraHeaders: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
  const handleGetCases = (caseIds) => {
    console.log('received case ids =>', caseIds)
    setCases(caseIds.slice(0,60));
  }

  useEffect(() => {
    socket.emit('Get_cases')
    socket.on('static-cases', handleGetCases);
  }, []);
  return (
        <div>
          <Navbar />
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
              <th >  S.NO   </th>
              <th width='10'>  Case Description   </th>
              <th > Location   </th>
              <th>  Case Score   </th>
              <th> Status</th>
              </tr>
            </thead>
            <tbody>
              {cases&&
                cases.map((item) => (
                  <tr key={item}>
                    <td> {item._id}</td>
                    <td>{item.desc}</td>
                    <td>{item.location}</td>
                    <td> {item.crime_score} </td>
                    <td style={{ color: (item.Status)==="Unassigned" ? 'red' : 'green' }}>{<div>{(item.Status)==="Unassigned" ? <div>UnSolved</div> : <div>Solved</div>}</div>}</td>
                  </tr>
                ))}
            </tbody>
          </ReactBootStrap.Table>
        </div>
      );
};
 export default Table2;
