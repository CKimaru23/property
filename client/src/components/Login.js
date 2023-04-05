import React, { useState } from "react";
import { Form, Input, Button, Header } from "semantic-ui-react";
import Footer from "./Footer";

function Login({ setLandlord }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((landlord) => setLandlord(landlord));
      }
    });
  }

  const myStyle={
    backgroundImage: 
      "url('https://t.ly/MA-z')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    // opacity: 0.1,
  };


  return (
    <div>
      <div style={myStyle}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <Form onSubmit={handleSubmit}>
            <Header as='h1' style={{alignItems: 'center', justifyContent: 'center' }}>Login Form</Header>
            
            <Form.Field>
              <label>Email</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Field>
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
