import React from 'react';
import { Link } from 'react-router-dom';


function SignUpForm(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/seasonalproducelist">Seasonal Produce List</Link> | <Link to="/newmarketschedule">Create Market Schedule</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/about">About</Link>
      <h1>Sign Up: </h1>
      <form>
        <input
          type='text'
          id='username'
          placeholder='Username'/>
        <input
          type='text'
          id='email'
          placeholder='Email'/>
        <input
          type='text'
          id='password'
          placeholder='Password'/>
        <button type='submit'>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}


export default SignUpForm;
