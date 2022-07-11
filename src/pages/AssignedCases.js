import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../components/NavBar";
import { io } from "socket.io-client";

function Table1 () {
  const [posts, setPosts] = useState({ blogs: [] });
  const [bids, setBids] = useState([0]);
  const socket = io("http://secrep.herokuapp.com/admin",{
    reconnectionDelayMax: 10000,
    extraHeadres: {
      "x-access-token":localStorage.getItem("token"),
    },
  });
  useEffect(() => {
    console.log(socket.connected);
    socket.on("static-cases", (caseIds) => {  
      alert(caseIds);
    });
  }, []);


  const firstBids = bids.map((item) => {
    return (
      <div>
        <p> {item}</p>
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Case Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {posts.blogs &&
            posts.blogs.map((item) => (
              <tr key={firstBids.id}>
                <td> {firstBids.id}</td>
                <td>{firstBids.desc}</td>
                <td>{<div>{firstBids}</div>}</td>
              </tr>
            ))}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
};
export default Table1;
