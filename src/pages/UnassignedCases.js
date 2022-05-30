import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap'
import Navbar from '../components/NavBar';
const Table2=()=>{
  const [posts,setPosts]= useState({blogs:[]})
  const [bids, setBids] = useState([0]);

  const ws = new WebSocket("wss://ws.bitstamp.net");

  const apiCall = {
    event: "bts:subscribe",
    data: { channel: "order_book_btcusd" },
  };

  ws.onopen = (event) => {
    ws.send(JSON.stringify(apiCall));
  };

  ws.onmessage = function (event) {
    const json = JSON.parse(event.data);
    try {
      if ((json.event = "data")) {
        setBids(json.data.bids.slice(0, 1));
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
        <p> {item}</p>
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
export default Table2;