import React, { useEffect, useState } from "react";
import { Switch, Route } from 'react-router-dom';
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from './NavBar'
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import ApartmentPage from "./ApartmentPage";
import Todo from "./Todo";

function App() {
  const [landlord, setLandlord] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((landlord) => setLandlord(landlord));
      }
    });
  }, []);

  return (
    <>
      <NavBar landlord={landlord} setLandlord={setLandlord} />
      <main style={{marginTop: "50px"}}> 
        <Switch>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/about">
              <About/>
          </Route>
          <Route path="/apartments">
              <ApartmentPage/>
          </Route>
          <Route path="/todos">
              <Todo/>
          </Route>
          <Route path="/signup">
              <SignUp setLandlord={setLandlord} />
          </Route>
          <Route path="/login">
              <Login setLandlord={setLandlord} />
          </Route>
          <Route path="/">
              <Home landlord={landlord}/>
          </Route>

        </Switch>
      </main>
      
      {/* {landlord ? (
          <Switch>
            <Route path="/">
              <Home landlord={landlord}/>
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setLandlord={setLandlord} />
            </Route>
            <Route path="/login">
              <Login setLandlord={setLandlord} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )} */}
     
  </>
  );
  
}

export default App;
