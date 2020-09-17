import React from 'react';
import Home from './components/home/home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
