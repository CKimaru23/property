import React, { useState } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import NavBar from './NavBar';
import Footer from './Footer';
import {useHistory} from 'react-router-dom'


const Contact = () => {
  // if (landlord) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState(null);
    const [formSuccess, setFormSuccess] = useState(false);

    const history = useHistory();

    const handleSubmit = (event) => {
      event.preventDefault();

      // perform form validation
      if (!name || !email || !subject || !message) {
        setFormError('Please fill in all fields');
        return;
      }

      // create a new contact message object
      const newMessage = {
        name: name,
        email: email,
        subject: subject,
        message: message
      };

      // save the new message to the database
      fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessage)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setFormSuccess(true);
          
        } 
        history.push("/home")
        // else {
        //   setFormError(data.message);
        // }
      })
      .catch(error => {
        console.error(error);
        setFormError('Oops, something went wrong');
      });
    };

    const myStyle={
      backgroundImage: 
        "url('https://t.ly/MA-z')",
      height:'100vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: 0.9,
    };

    return (
      <div>
      <div style={myStyle}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: "https://rb.gy/idlq"}}>
          <Form onSubmit={handleSubmit} error={!!formError} success={formSuccess}>
          <h1>Contact Us</h1>
            <Form.Input label="Name" name="name" value={name} onChange={event => setName(event.target.value)} required />
            <Form.Input label="Email" name="email" type="email" value={email} onChange={event => setEmail(event.target.value)} required />
            <Form.Input label="Subject" name="subject" value={subject} onChange={event => setSubject(event.target.value)} required />
            <Form.TextArea label="Message" name="message" value={message} onChange={event => setMessage(event.target.value)} required />
            {formError && <Message error header="Error" content={formError} />}
            {formSuccess && <Message success header="Success" content="Your message has been sent" />}
            <Button primary type="submit">Send</Button>
          </Form>
          
        </div>
        
      </div>
      <Footer/>
      </div>
      
    );
  // } else {
  //   return <h1>Please Login or Sign Up</h1>;
  // }
};

export default Contact;
