import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ match }) => (
  <div id="header">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/signup">Sign up</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </div>
)

export default Header
