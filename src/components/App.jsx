import React from 'react';
import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import SeasonalProduceList from './SeasonalProduceList';
import NewMarketScheduleForm from './NewMarketScheduleForm';
import elephantAndDog from '../assets/images/elephantanddog.jpg';


import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <img src={elephantAndDog}/>
      <Switch>
        <Route exact path='/' component={MarketScheduleList} />
        <Route path='/seasonalproducelist' component={SeasonalProduceList} />
        <Route path='/newmarketschedule' component={NewMarketScheduleForm} />

      </Switch>
    </div>
  );
}

export default App;
