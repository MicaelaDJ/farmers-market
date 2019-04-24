import React from 'react';
import MarketSchedule from './MarketSchedule';
import { Link } from 'react-router-dom';


const masterMarketScheduleList = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function MarketScheduleList() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/seasonalproducelist">Seasonal Produce List</Link> | <Link to="/newmarketschedule">Create Market Schedule</Link> | <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/about">About</Link>
      <h1>Farmer's Market Schedule: </h1>
      <hr/>
      {masterMarketScheduleList.map((marketSchedule, index) =>
        <MarketSchedule
          day= {marketSchedule.day}
          location={marketSchedule.location}
          hours={marketSchedule.hours}
          booth={marketSchedule.booth}
          key={index}/>
      )}
    </div>
  );
}


export default MarketScheduleList;
