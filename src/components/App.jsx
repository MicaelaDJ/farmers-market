import React from 'react';
import Header from './Header';
import MarketScheduleList from './MarketScheduleList';
import SeasonalProduceList from './SeasonalProduceList';
import NewMarketScheduleForm from './NewMarketScheduleForm';
import Error404 from './Error404';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import AboutUs from './AboutUs';





import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MarketScheduleList} />
        <Route path='/seasonalproducelist' component={SeasonalProduceList} />
        <Route path='/newmarketschedule' component={NewMarketScheduleForm} />
        <Route path='/login' component={LoginForm} />
        <Route path='/signup' component={SignUpForm} />
        <Route path='/about' component={AboutUs} />

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
