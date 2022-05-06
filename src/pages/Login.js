import React, { useState } from "react";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import header from "react-bootstrap-table-next/lib/src/header";

const Log = () => {
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
      "x-access-token": ""
      },

      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data) => {
        setmsg(data);
        if (data.status === 200) {
          localStorage.setItem("user", data.user);
          localStorage.setItem("Auth", true);
          window.location.href = "http://localhost:3000";
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

          {msg != [] && msg.status == 400 ? (
            <Alert key="alert" variant="alert">
              Invalid Credentials
            </Alert>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Log;
