import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Farmer's Market!</h1>
      <Link to="/">Home</Link> | <Link to="/seasonalproducelist">Seasonal Produce List</Link> | <Link to="/newmarketschedule">Create Market Schedule</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>

    </div>
  );
}

export default Header;
