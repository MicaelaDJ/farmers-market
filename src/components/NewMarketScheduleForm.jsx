import React from 'react';
import { Link } from 'react-router-dom';


function NewMarketScheduleForm(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/seasonalproducelist">Seasonal Produce List</Link> | <Link to="/newmarketschedule">Create Market Schedule</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/about">About</Link>
      <h1>Create New Market Schedule: </h1>
      <form>
        <input
          type='text'
          id='day'
          placeholder='Day'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <input
          type='text'
          id='hours'
          placeholder='Hours'/>
        <input
          type='text'
          id='Booth'
          placeholder='Booth'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}


export default NewMarketScheduleForm;
