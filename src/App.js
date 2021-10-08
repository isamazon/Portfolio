import React from 'react';
//
// Components
import Home from './Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
