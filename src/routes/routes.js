import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Quiz from '../pages/quiz';
import Timeout from '../pages/timeout';
import Welcome from '../pages/welcome';
import ErrorBoundaries from "../components/error-boundaries";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome}/>
      <Route path="/quiz" exact component={Quiz}/>
      <Route path="/timeout" exact component={Timeout} />
      <Route component={ErrorBoundaries} />
    </Switch>
  );
}