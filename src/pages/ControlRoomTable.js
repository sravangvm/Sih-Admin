import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import * as ReactBootStrap from 'react-bootstrap'

const Table=(props)=>{
  const [posts,setPosts]= useState({blogs:[]})
  const [bids, setBids] = useState([0]);

  function onChangePage(pageOfItems){
    this.setState({ pageOfItems: pageOfItems });  
  }

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
      setPosts({blogs:data.slice(0,30)})
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
<ReactBootStrap.Table striped bordered hover >
  <thead>
    <tr>
      <th ><button >S.NO</button></th>
      <th width='1000'> <button>Case Description</button></th>
      <th ><button>Location</button></th>
      <th><button >Case Score</button></th>
      <th><button>Status </button></th>
    </tr>
  </thead>
  <tbody>
    {
    posts.blogs && posts.blogs.map((item)=>(
      <tr key={item.id}>
        <td dataSort={true}> {item.id}</td>
        <td>{item.body}</td>
        <td>{<div>hyderabad</div>}</td>
          <td style={{color:((item.id*20)/10)>75? 'red':'black'}}>{<div>{(item.id*20)/10} </div>}</td>
        <td style={{ color: (item.id%2)===0 ? 'red' : 'green' }}>{<div>{(item.id%2)===0 ? <div>UnSolved</div> : <div>Solved</div>}</div>}</td>
      </tr>
    ))
    }
    </tbody>
</ReactBootStrap.Table>
  </div>
)
}
export default Table;