import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const NavBar = ({ landlord, setLandlord }) => {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setLandlord(null);
      }
    });
  }

  return (
    <Menu inverted fixed="top" style={{ marginBottom: "80px" }}>
      <Menu.Item>
        <Link to="/">Logo</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Menu position="right">

      {landlord ? (
        <>
          <Menu.Item>
            <Link to="/apartments">My Properties</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/logout" onClick={handleLogoutClick}>Logout</Link>
          </Menu.Item>
          
        </>
        ) : (
          <>
            <Menu.Item>
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/signup">Signup</Link>
            </Menu.Item>
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default NavBar;
