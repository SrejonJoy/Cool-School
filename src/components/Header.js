import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      background: '#333',
      color: '#fff',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h1 style={{ margin: 0 }}>My App</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
          <li><NavLink to="/login" activeClassName="active-link">Login</NavLink></li>
          <li><NavLink to="/register" activeClassName="active-link">Register</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active-link">Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;