import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Quiz from '../pages/quiz';
import Timeout from '../pages/timeout';
import Welcome from '../pages/welcome';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome}/>
      <Route path="/quiz" component={Quiz}/>
      <Route path="/timeout" component={Timeout} />
    </Switch>
  );
}