import React from 'react';
import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import SeasonalProduceList from './SeasonalProduceList';


function App(){
  return (
    <div>
      <Header/>
      <h3>Market Schedule: </h3>
      <MarketScheduleList/>
      <h3>Seasonal Produce: </h3>
      <SeasonalProduceList/>
    </div>
  );
}

export default App;
