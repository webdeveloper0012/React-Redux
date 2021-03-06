import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './Containers/landing-page';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
