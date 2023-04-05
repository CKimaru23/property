import React, { useState } from "react";
import { Button, Form as SemanticForm, Header, Icon, Message, Label, Grid, Form } from 'semantic-ui-react';
// import {useHistory } from 'react-router-dom'


function SignUp({ setLandlord }) {
  const[fname, setFname] = useState("");
  const[lname, setLname] = useState("");
  const[email, setEmail] = useState("");
  const[phoneNumber, setPhoneNumber] = useState("");
  const[address, setAddress] = useState("");
  const[password, setPassword] = useState("");
  const[passwordConfirmation, setPasswordConfirmation] = useState("");

  // const [errors, setErrors] = useState({});

  // const [formData, setFormData] = useState({
  //   fname: "",
  //   lname: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  //   password: "",
  //   password_confirmation: passwordConfirmation,
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post("/signup", formData);
  //     console.log(res.data);
  //   } catch (error) {
  //     setErrors(error.response.data.errors);

  //   }
  // };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        phoneNumber,
        address,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((landlord) => setLandlord(landlord));
      }
    });
  }
 
  return (
     <div>
      <Grid
        textAlign="center"
        style={{ height: "100vh"}}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Icon name="user" /> Create your landlord account
          </Header>
          <Form size="large" onSubmit={handleSubmit}>
            <SemanticForm.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="First name"
                name="fname"
                id="fname"
                autoComplete="off"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
            />
            {/* {errors.fname && <p>{errors.fname}</p>} */}

            <SemanticForm.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Last name"
                name="lname"
                id="lname"
                autoComplete="off"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
            />
            {/* {errors.lname && <p>{errors.lname}</p>} */}

            <SemanticForm.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {/* {errors.email && <p>{errors.email}</p>} */}

            <SemanticForm.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}

            <SemanticForm.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            {/* {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>} */}

            <SemanticForm.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {/* {errors.phoneNumber && <p>{errors.phoneNumber}</p>} */}

            <SemanticForm.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="Address"
                name="address"
                value={address}
                id="address"
                onChange={(e) => setAddress(e.target.value)}
            />
            {/* {errors.address && <p>{errors.address}</p>} */}

            <Button
                type="submit"
                color="teal"
                fluid
                size="large"
            >
                Create Account
            </Button>
          </Form>
          <Message>
            Already have an account? <a href="/login">Log In</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
 
 export default SignUp;
 



