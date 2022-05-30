import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
const Log = () => {
  let Auth=useState("");
  const [user, setUser] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    let body = {
      user: user,
      password: password,
    };
    fetch("https://secrep.herokuapp.com/admin/login", {
      method: "POST",
      headers:{
      "X-API-Key": "ccae6d912a41bfefd569a77b5cd86603cde92e53cdd45813cba9e5bf080b3734",
      "x-access-token": "",
      "Content-Type":"application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        setmsg(data);
        if (data.login === true) {
          localStorage.setItem("user", data.user);
          sessionStorage.setItem("Auth", true);
          window.location.href = "http://localhost:3000/Table";
        }
        else
        {
          alert("INVALID CREDENTIALS");
        }
      });
  };
  return (
    <div>
      <Container>
        <div className="form">
          <Card>
            <Card.Body>
              <div className="pageheading">Log In</div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter User Name"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    handlesubmit(e);
                  }}
                >
                  LOGIN
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Log;
