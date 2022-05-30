import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap'
import Navbar from '../components/NavBar';
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const Table1=(props)=>{
  const [posts,setPosts]= useState({blogs:[]})
  const [bids, setBids] = useState([0]);

  const ws = io("https://secrep.herokuapp.com/admin/get-cases",[{headers:{
    "X-API-Key": "ccae6d912a41bfefd569a77b5cd86603cde92e53cdd45813cba9e5bf080b3734"}}]);
  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  ws.onopen = (event) => {
    alert("api")
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {
      alert(event.data);
      if ((json.event = "cases")) {
        setBids(json.data.bids.slice(0, 30));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    const fetchPostslist =async()=>{
      const {data}= await axios("https://jsonplaceholder.typicode.com/comments")
      setPosts({blogs:data})
      console.log(data);
    }
    fetchPostslist()
  },[setPosts])
  const firstBids = bids.map((item) => {
    return (
      <div>
        <p> {item.victims}</p>
      </div>
    );
  });
return(     
  <div>
    <Navbar/>
    <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>S.NO</th>
      <th>Case Name</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    {
    posts.blogs && posts.blogs.map((item)=>(
      <tr key={item.id}>
        <td > {item.id}</td>
        <td>{item.body}</td>
        <td>{<div>
          {firstBids}</div>}</td>
      </tr>
    ))
    }
    </tbody>
</ReactBootStrap.Table>
  </div>
)
}
export default Table1;